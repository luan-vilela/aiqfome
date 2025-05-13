'use client';

import { useState } from 'react';

import { useTheme } from 'styled-components';

import Icon from '../ui/icon/icon';
import * as S from './accordion.styles';

interface AccordionProps {
  title: string;
  icon?: boolean;
  description?: string;
  children?: React.ReactNode;
}

export function Accordion({ title, description, children, icon }: AccordionProps) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <S.Container>
      <S.Header onClick={() => setOpen(!open)}>
        <S.HeaderContent>
          <S.TitleContent>
            <S.Title>{title}</S.Title>
            {icon && <Icon name='dolarCircle' size={18} />}
          </S.TitleContent>
          {description && <S.Description>{description}</S.Description>}
        </S.HeaderContent>
        <S.Icon open={open}>
          <Icon name='arrowRight' size={14} />
        </S.Icon>
      </S.Header>
      {open && <S.Content>{children}</S.Content>}
    </S.Container>
  );
}
