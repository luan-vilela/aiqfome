'use client';

import { useState } from 'react';

import { formatCurrency } from '@/utils/currencyHelpers';

import { CircleButton } from '@/components/ui/circle-button/circleButton';

import * as S from './productQuantityControl.styles';

interface ProductQuantityControlProps {
  unitPrice: number;
  onQuantityChange?: (q: number) => void;
}

export function ProductQuantityControl({ unitPrice, onQuantityChange }: ProductQuantityControlProps) {
  const [quantity, setQuantity] = useState(0);

  const total = (quantity || 1) * unitPrice;

  const handleAdd = () => {
    const q = quantity + 1;
    setQuantity(q);
    onQuantityChange?.(q);
  };

  const handleRemove = () => {
    const q = Math.max(quantity - 1, 0);
    setQuantity(q);
    onQuantityChange?.(q);
  };

  return (
    <S.Wrapper>
      <S.LeftContainer>
        <S.Label>quantos?</S.Label>
        <S.Total>
          total <span>{formatCurrency(total)}</span>
        </S.Total>
      </S.LeftContainer>

      <S.RightContainer>
        {quantity === 0 ? (
          <S.AddButton onClick={handleAdd}>adicionar</S.AddButton>
        ) : (
          <S.QuantityControls>
            <CircleButton icon='trash' variant='icon' onClick={handleRemove} />
            <S.QuantityText>{quantity}</S.QuantityText>
            <CircleButton icon='plus' onClick={handleAdd} size='sm' />
          </S.QuantityControls>
        )}
      </S.RightContainer>
    </S.Wrapper>
  );
}
