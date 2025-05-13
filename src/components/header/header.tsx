'use client';

import { FC } from 'react';

import { useThemeStore } from '@/store/useThemeStore';

import Icon from '../ui/icon/icon';
import * as S from './header.styles';
import { HeaderProps } from './header.types';

export const Header: FC<HeaderProps> = ({ title = 'My App', onMenuClick }) => {
  const { toggleTheme, theme } = useThemeStore();

  return (
    <S.Container>
      <Icon name='logo' color='white' size={32} />

      <S.TextGroup>
        <S.SmallText>entregando em</S.SmallText>
        <S.AddressRow>
          <S.AddressText>Rua Mandaguari, 198</S.AddressText>
          <S.Arrow>
            <Icon name='arrowRight' />
          </S.Arrow>
        </S.AddressRow>
      </S.TextGroup>

      <div onClick={toggleTheme}>
        <Icon name='user' />
      </div>
    </S.Container>
  );
};
