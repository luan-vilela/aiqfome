import Link from 'next/link';

import { formatCurrency } from '@/utils/currencyHelpers';

import Icon from '../ui/icon/icon';
import * as S from './restaurantCard.styles';
import { IRestaurant } from './restaurantCard.types';

interface Props {
  data: IRestaurant;
}

export default function RestaurantCard({ data }: Props) {
  return (
    <S.LinkContainer href={`/loja/${data.id}`} title={`Loja ${data.name}`}>
      <S.Card>
        <S.Logo src={data.imageUrl} alt={data.name} $openTrade={data.openTrade} />
        <S.Info>
          <S.Name>{data.name}</S.Name>
          <S.Meta>
            {data.deliveryFree ? (
              <S.FreeDelivery>
                <Icon name='bike' size={13} /> grátis
              </S.FreeDelivery>
            ) : (
              <S.Delivery>
                <Icon name='delivery' size={18} /> {formatCurrency(data.deliveryFee)}
              </S.Delivery>
            )}

            <S.Rating>
              <Icon name='star' size={18} /> {data.rating.toFixed(1)}
            </S.Rating>
          </S.Meta>
        </S.Info>
      </S.Card>
    </S.LinkContainer>
  );
}
