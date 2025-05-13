'use client';

import { use, useState } from 'react';

import { LimitedCheckboxGroup } from '@/app/loja/components/limited-checkbox-group/limitedCheckboxGroup';
import { LimitedRadioGroup } from '@/app/loja/components/limited-radio-group/limitedRadioGroup';
import { productListMock } from '@/mock/product.mocks';
import { restaurants } from '@/mock/restaurant.mocks';
import { useTicketStore } from '@/store/useTicketStore';

import { NoteInput } from '@/components/ui/note-input/noteInput';

import { MultiItemQuantityList } from '../components/multi-item-quantity-list/multiItemQuantityList';
import { ProductQuantityControl } from '../components/product-quantity-control/productQuantityControl';
import { SummaryCard } from '../components/summary-card/summaryCard';
import { Container } from '../styles';

const Produto = ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = use(params);
  const restaurantId = slug[0];
  const productId = slug[1];

  const product = productListMock.find((item) => item.id === productId);

  const restaurant = restaurants.find((rest) => rest.id === restaurantId);

  const { setTicketItem, updateNote } = useTicketStore();

  const [quantity, setQuantity] = useState(0);
  const [checkboxOptions, setCheckboxOptions] = useState<string[]>([]);
  const [radioOption, setRadioOption] = useState<string | null>(null);
  const [multiItemQuantities, setMultiItemQuantities] = useState<Record<string, number>>({});
  const [note, setNote] = useState('');

  if (!product || !restaurant) {
    return <div>Produto não encontrado.</div>;
  }

  const updateStore = () => {
    setTicketItem(restaurant.id, {
      productId: product.id,
      quantity,
      note,
      checkboxOptions,
      radioOption: radioOption ?? undefined,
      multiItemQuantities,
    });
  };

  return (
    <Container>
      <SummaryCard
        imageUrl={product.imageUrl}
        title={product.title}
        price={product.basePrice}
        description={product.description}
      />

      <ProductQuantityControl
        unitPrice={product.unitPrice}
        onQuantityChange={(q) => {
          setQuantity(q);
          updateStore();
        }}
      />

      <LimitedCheckboxGroup
        {...product.options.checkboxGroup}
        onChange={(selected) => {
          setCheckboxOptions(selected);
          updateStore();
        }}
      />

      <LimitedRadioGroup
        {...product.options.radioGroup}
        onChange={(selected) => {
          setRadioOption(selected);
          updateStore();
        }}
      />

      <MultiItemQuantityList
        {...product.options.quantityItems}
        onChange={(quantities) => {
          setMultiItemQuantities(quantities);
          updateStore();
        }}
      />

      <div style={{ padding: '16px' }}>
        <NoteInput
          value={note}
          onChange={(value) => {
            setNote(value);
            updateNote(restaurant.id, value);
          }}
        />
      </div>
    </Container>
  );
};

export default Produto;
