'use client';

import { FC } from 'react';

import { useTheme } from 'styled-components';

import { formatCurrency } from '@/utils/currencyHelpers';

import Banner from '@/components/banner/banner';
import { DotDivider } from '@/components/ui/dot-divider/dotDivider';
import Icon from '@/components/ui/icon/icon';

import * as S from './storeDetails.styles';
import { StoreDetailsProps } from './storeDetails.types';

export const StoreDetails: FC<StoreDetailsProps> = ({
  deliveryFee,
  deliveryTimeDescription,
  distanceInKm,
  deliveryCondition,
  rating,
  closingTime,
  minimumOrderValue,
}) => {
  const theme = useTheme();

  const minOrder =
    minimumOrderValue > 0 ? `pedido mínimo: ${formatCurrency(minimumOrderValue)}` : 'sem valor mínimo';

  return (
    <S.Container>
      <S.Box>
        <S.BoxFee>
          <S.Fee>
            <Icon name='bike' size={18} />
            <div>{formatCurrency(deliveryFee)}</div>
            <Icon name='arrowRight' size={8} />
          </S.Fee>
        </S.BoxFee>
        <DotDivider />
        <S.Text>{deliveryTimeDescription}</S.Text>
        <DotDivider />
        <S.Text>{distanceInKm}km</S.Text>
      </S.Box>

      <Banner>{deliveryCondition}</Banner>

      <S.Box>
        <Icon name='star' size={12} />
        <S.Text>{rating} de 5</S.Text>
        <Icon name='arrowRight' size={8} color={theme.colors.neutral[500]} />
        <DotDivider />
        <S.Text style={{ color: theme.colors.other.success }}>{closingTime}</S.Text>
      </S.Box>

      <S.Text>{minOrder}</S.Text>
    </S.Container>
  );
};
