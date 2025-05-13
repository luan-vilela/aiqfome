'use client';

import React from 'react';

import Icon from '../../icon/icon';
import {
  CheckboxInput,
  CheckboxLabel,
  CheckboxWrapper,
  IconContent,
  LabelContainer,
} from './checkbox.styles';
import { CheckboxProps } from './checkbox.types';

export const Checkbox: React.FC<CheckboxProps> = ({
  labelLeft = false,
  checkboxInputStyle,
  label,
  ...props
}) => (
  <CheckboxWrapper>
    <CheckboxLabel>
      {labelLeft && <LabelContainer disabled={props.disabled}>{label}</LabelContainer>}

      <input type='checkbox' {...props} />
      <CheckboxInput style={checkboxInputStyle}>
        <IconContent>
          <Icon name='check' />
        </IconContent>
      </CheckboxInput>

      {!labelLeft && <LabelContainer disabled={props.disabled}>{label}</LabelContainer>}
    </CheckboxLabel>
  </CheckboxWrapper>
);
