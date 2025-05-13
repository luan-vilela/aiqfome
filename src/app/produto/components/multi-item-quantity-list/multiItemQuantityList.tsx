'use client';

import { useState } from 'react';

import { formatCurrency } from '@/utils/currencyHelpers';

import { OptionGroup } from '@/components/option-group/optionGroup';
import { CircleButton } from '@/components/ui/circle-button/circleButton';

import * as S from './multiItemQuantityList.styles';

type Item = {
  id: string;
  label: string;
  price: number;
};

interface Props {
  title: string;
  subtitle?: string;
  required?: boolean;
  items: Item[];
  onChange?: (quantities: Record<string, number>) => void;
}

export function MultiItemQuantityList({ title, subtitle, required, items, onChange }: Props) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleChange = (id: string, delta: number) => {
    setQuantities((prev) => {
      const newValue = Math.max((prev[id] || 0) + delta, 0);
      const updated = { ...prev, [id]: newValue };
      onChange?.(updated);
      return updated;
    });
  };

  return (
    <OptionGroup title={title} subtitle={subtitle} required={required}>
      {items.map((item) => (
        <S.ItemRow key={item.id}>
          <S.Controls>
            <CircleButton
              icon='minus'
              size='xs'
              disabled={!(quantities[item.id] > 0)}
              onClick={() => handleChange(item.id, -1)}
            />
            <S.Quantity>{quantities[item.id] || 0}</S.Quantity>
            <CircleButton icon='plus' size='xs' onClick={() => handleChange(item.id, 1)} />
          </S.Controls>

          <S.Label>{item.label}</S.Label>

          <S.Price>{formatCurrency(item.price)}</S.Price>
        </S.ItemRow>
      ))}
    </OptionGroup>
  );
}
