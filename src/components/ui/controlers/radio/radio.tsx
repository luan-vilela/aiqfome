'use client';

import React from 'react';

import Icon from '../../icon/icon';
import {
  IconContent,
  LabelContainer,
  RadioButtonInput,
  RadioButtonLabel,
  RadioButtonWrapper,
} from './radio.styles';
import { RadioButtonProps } from './radio.types';

export const RadioButton: React.FC<RadioButtonProps> = ({ labelLeft = false, label, ...props }) => (
  <RadioButtonWrapper>
    <RadioButtonLabel>
      {labelLeft && <LabelContainer disabled={props.disabled}>{label}</LabelContainer>}

      <input type='radio' {...props} />
      <RadioButtonInput>
        <IconContent>
          <Icon name='check' />
        </IconContent>
      </RadioButtonInput>

      {!labelLeft && <LabelContainer disabled={props.disabled}>{label}</LabelContainer>}
    </RadioButtonLabel>
  </RadioButtonWrapper>
);
