'use client';

import React, { useEffect, useState } from 'react';

import { useMultiSelectLimit } from 'hook/useMultiSelectLimit';

import { formatCurrency } from '@/utils/currencyHelpers';

import { OptionGroup } from '@/components/option-group/optionGroup';
import { Checkbox } from '@/components/ui/controlers/checkbox/checkbox';
import Icon from '@/components/ui/icon/icon';

import * as S from './limitedCheckboxGroup.styles';
import { LimitedCheckboxGroupProps, OptionsSwitch } from './limitedCheckboxGroup.types';

export function LimitedCheckboxGroup({
  title,
  subtitle,
  required,
  options,
  min = 0,
  max,
  initialSelected = [],
  onChange,
}: LimitedCheckboxGroupProps) {
  const { isSelected, toggle, isDisabled, selected, isValid } = useMultiSelectLimit({
    min,
    max,
    initialSelected,
  });

  const handleToggle = (value: string) => {
    toggle(value);
  };

  useEffect(() => {
    onChange?.(selected, isValid);
  }, [selected]);

  const renderLabel = (option: OptionsSwitch) => (
    <S.Label>
      {option.oldPrice && <Icon name='dolarCircle' />}
      {option.label}
    </S.Label>
  );

  const renderValue = (option: OptionsSwitch) => {
    if (option.oldPrice)
      return (
        <S.PriceInfoContainer>
          <S.OriginalPrice>de {formatCurrency(option.oldPrice)} por</S.OriginalPrice>
          <S.DiscountPrice>{formatCurrency(option.price || 0)}</S.DiscountPrice>
        </S.PriceInfoContainer>
      );

    return <>{option.price && <S.Price>{formatCurrency(option.price || 0)}</S.Price>}</>;
  };

  return (
    <OptionGroup title={title} subtitle={subtitle} required={required}>
      {options.map((option) => (
        <S.ContainerLabel key={option.id}>
          <Checkbox
            id={option.id}
            label={renderLabel(option)}
            value={option.value}
            checked={isSelected(option.value)}
            onChange={() => handleToggle(option.value)}
            disabled={isDisabled(option.value)}
          />
          {renderValue(option)}
        </S.ContainerLabel>
      ))}
    </OptionGroup>
  );
}
