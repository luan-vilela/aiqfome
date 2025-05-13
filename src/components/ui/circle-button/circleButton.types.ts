import { ButtonHTMLAttributes } from 'react';

import { IconName } from '../icon/iconRegistry';

export type CircleButtonSize = 'md' | 'sm' | 'xs';
export type CircleButtonVariant = 'normal' | 'icon';
export type CircleButtonColor = 'primary' | 'secondary';

export interface CircleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: CircleButtonSize;
  variant?: CircleButtonVariant;
  color?: CircleButtonColor;
  icon: IconName;
  disabled?: boolean;
}
