'use client';

import React from 'react';

import Banner from '../banner/banner';
import * as S from './optionGroup.styles';

interface OptionGroupProps {
  title: string;
  subtitle?: string;
  required?: boolean;
  children: React.ReactNode;
}

export function OptionGroup({ title, subtitle, required, children }: OptionGroupProps) {
  return (
    <S.Container>
      <S.TitleRow>
        <div>
          <S.Title>{title}</S.Title>
          {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
        </div>
        {required && <Banner variant='attention'>obrigatório</Banner>}
      </S.TitleRow>

      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
