'use client';

import { FC } from 'react';

import Icon from '@/components/ui/icon/icon';

import * as S from './storeHeader.styles';
import { StoreHeaderProps } from './storeHeader.types';

export const StoreHeader: FC<StoreHeaderProps> = ({ name, logoUrl, linkToDetails }) => {
  return (
    <S.Container>
      <S.HeaderContent>
        <S.Header>
          <S.Logo src={logoUrl} />
          <S.Name>{name}</S.Name>
        </S.Header>
        <S.HeaderAction>
          <Icon name='share' size={24} />
          <Icon name='favorite' size={24} />

          <S.InfoAction>
            mais infos
            <Icon name='arrowRight' size={8} />
          </S.InfoAction>
        </S.HeaderAction>
      </S.HeaderContent>
    </S.Container>
  );
};
