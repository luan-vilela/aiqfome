'use client';

import { formatCurrency } from '@/utils/currencyHelpers';

import Icon from '@/components/ui/icon/icon';

import * as S from './catalogList.styles';
import { CatalogListProps } from './catalogList.types';

export function CatalogList({ items, store }: CatalogListProps) {
  return (
    <S.Container>
      {items.map((item) => (
        <S.ActionItem key={item.id} href={`/produto/${store}/${item.id}`}>
          <S.Item>
            <S.Details>
              <S.TitleRow>
                <S.Title>{item.name}</S.Title>

                {!!item.icon && (
                  <S.TagIcon>
                    <Icon name={item.icon} size={13} />
                  </S.TagIcon>
                )}
              </S.TitleRow>
              <S.Description>{item.description}</S.Description>
            </S.Details>

            <S.PriceContainer>
              {item.promo && <S.Promo>a partir de</S.Promo>}
              {item.oldPrice && <S.OldPrice>{formatCurrency(item.oldPrice)}</S.OldPrice>}
              <S.Price>{formatCurrency(item.price)}</S.Price>
            </S.PriceContainer>
          </S.Item>
        </S.ActionItem>
      ))}
    </S.Container>
  );
}
