'use client';

import React from 'react';

import { useSingleSelect } from 'hook/useSingleSelect';

import { formatCurrency } from '@/utils/currencyHelpers';

import { OptionGroup } from '@/components/option-group/optionGroup';
import { RadioButton } from '@/components/ui/controlers/radio/radio';
import Icon from '@/components/ui/icon/icon';

import * as S from './limitedRadioGroup.styles';
import { LimitedRadioGroupProps, OptionsRadio } from './limitedRadioGroup.types';

export function LimitedRadioGroup({
  title,
  subtitle,
  required,
  options,
  initialSelected = [],
  onChange,
}: LimitedRadioGroupProps) {
  const { selected, isSelected, select } = useSingleSelect(initialSelected[0]);

  const handleSelect = (value: string) => {
    select(value);
    onChange?.(value, !selected);
  };

  const renderLabel = (option: OptionsRadio) => (
    <S.Label>
      {option.oldPrice && <Icon name='dolarCircle' />}
      {option.label}
    </S.Label>
  );

  const renderValue = (option: OptionsRadio) => {
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
          <RadioButton
            id={option.id}
            label={renderLabel(option)}
            value={option.value}
            name={option.name}
            checked={isSelected(option.value)}
            onChange={() => handleSelect(option.value)}
          />
          {renderValue(option)}
        </S.ContainerLabel>
      ))}
    </OptionGroup>
  );
}
