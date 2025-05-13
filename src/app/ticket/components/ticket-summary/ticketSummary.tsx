'use client';

import { productListMock } from '@/mock/product.mocks';
import { restaurants } from '@/mock/restaurant.mocks';
import { useTicketStore } from '@/store/useTicketStore';
import Link from 'next/link';

import { formatCurrency } from '@/utils/currencyHelpers';

import { CircleButton } from '@/components/ui/circle-button/circleButton';

import * as S from './ticketSummary.styles';

export function TicketSummary({ restaurantId }: { restaurantId: string }) {
  const ticketItems = useTicketStore((state) => state.ticket[restaurantId]);
  const updateQuantity = useTicketStore((state) => state.updateQuantity);

  const restaurant = restaurants.find((r) => r.id === restaurantId);

  if (!ticketItems || ticketItems.length === 0 || !restaurant) {
    return <S.EmptyState>Nenhum item selecionado.</S.EmptyState>;
  }

  const getProduct = (id: string) => productListMock.find((p) => p.id === id);

  const calculateItemTotal = (
    basePrice: number,
    quantity: number,
    checkboxOptions: any[] = [],
    multiItemQuantities: Record<string, number> = {}
  ) => {
    const checkboxTotal = checkboxOptions.reduce((acc, opt) => acc + (opt.price || 0), 0);
    const multiItemTotal = Object.entries(multiItemQuantities).reduce((acc, [_, qty]) => acc + qty * 2, 0);
    return (basePrice + checkboxTotal + multiItemTotal) * quantity;
  };

  const subtotal = ticketItems.reduce((acc, item) => {
    const product = getProduct(item.productId);
    if (!product) return acc;
    return (
      acc +
      calculateItemTotal(
        product.unitPrice,
        item.quantity,
        product.options.checkboxGroup.options.filter((opt) => item.checkboxOptions?.includes(opt.value)),
        item.multiItemQuantities
      )
    );
  }, 0);

  return (
    <S.Container>
      <S.RestaurantInfo>
        <S.Logo src={restaurant.imageUrl} alt={`logo ${restaurant.name}`} />
        <S.StoreTitleArea>
          <S.SmallText>seus itens em</S.SmallText>
          <S.StoreTitle>{restaurant.name}</S.StoreTitle>
        </S.StoreTitleArea>
      </S.RestaurantInfo>

      {ticketItems.map((item, idx) => {
        const product = getProduct(item.productId);
        if (!product) return null;

        const selectedCheckboxes =
          product.options.checkboxGroup.options.filter((opt) => item.checkboxOptions?.includes(opt.value)) ||
          [];

        return (
          <S.ItemCard key={`${item.productId}-${idx}`}>
            <S.ItemHeader>
              <S.ItemTitle>{product.title}</S.ItemTitle>
              <S.Price>{formatCurrency(product.unitPrice)}</S.Price>
            </S.ItemHeader>

            {item.radioOption && (
              <S.OptionGroup>
                <S.OptionLabel>• {product.options.radioGroup.title.toLowerCase()}</S.OptionLabel>
                <S.OptionValue>{item.radioOption}</S.OptionValue>
              </S.OptionGroup>
            )}

            {selectedCheckboxes.length > 0 && (
              <S.OptionGroup>
                <S.OptionLabel>• {product.options.checkboxGroup.title.toLowerCase()}</S.OptionLabel>
                <S.OptionValue>
                  {selectedCheckboxes.map((opt) => (
                    <div key={opt.value}>
                      {opt.label}
                      {opt.price && <S.AdditionalPrice> +{formatCurrency(opt.price)}</S.AdditionalPrice>}
                    </div>
                  ))}
                </S.OptionValue>
              </S.OptionGroup>
            )}

            {item.note && (
              <S.OptionGroup>
                <S.OptionLabel>observação:</S.OptionLabel>
                <S.OptionValue>{item.note}</S.OptionValue>
              </S.OptionGroup>
            )}

            <S.ActionRow>
              <Link href={`/produto/${restaurantId}/${item.productId}`}>editar</Link>
              <S.QuantityControl>
                <CircleButton
                  icon='minus'
                  size='xs'
                  onClick={() => updateQuantity(restaurantId, item.productId, item.quantity - 1)}
                />
                <span>{item.quantity}</span>
                <CircleButton
                  icon='plus'
                  size='xs'
                  onClick={() => updateQuantity(restaurantId, item.productId, item.quantity + 1)}
                />
              </S.QuantityControl>
            </S.ActionRow>
          </S.ItemCard>
        );
      })}

      <S.Footer>
        <S.SubtotalArea>
          <S.SubtotalLabel>subtotal</S.SubtotalLabel>
          <S.SubtotalValue>{formatCurrency(subtotal)}</S.SubtotalValue>
        </S.SubtotalArea>
        <S.PayButton>ir para pagamento</S.PayButton>
      </S.Footer>
    </S.Container>
  );
}
