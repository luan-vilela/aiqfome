import Image from 'next/image';

import { formatCurrency } from '@/utils/currencyHelpers';

import * as S from './summaryCard.styles';
import { SummaryCardProps } from './summaryCard.types';

export function SummaryCard({ imageUrl, title, description, price }: SummaryCardProps) {
  return (
    <S.Card>
      {imageUrl && (
        <S.ImageWrapper>
          <Image src={imageUrl} alt={title} fill objectFit='cover' />
        </S.ImageWrapper>
      )}

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Price>
          <span>a partir de</span>
          <strong>{formatCurrency(price)}</strong>
        </S.Price>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Card>
  );
}
