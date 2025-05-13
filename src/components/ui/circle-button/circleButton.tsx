'use client';

import React from 'react';

import Icon from '../icon/icon';
import { StyledButton } from './circleButton.styles';
import { CircleButtonProps } from './circleButton.types';

export const CircleButton: React.FC<CircleButtonProps> = ({
  size = 'md',
  variant = 'normal',
  color = 'primary',
  icon,
  disabled,
  ...props
}) => {
  return (
    <StyledButton size={size} variant={variant} color={color} icon={icon} disabled={disabled} aria-label={icon} {...props} >
      <Icon name={icon} />
    </StyledButton>
  );
};
