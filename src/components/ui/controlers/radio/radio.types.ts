import { InputHTMLAttributes } from 'react';

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  labelLeft?: boolean;
  label?: React.ReactNode;
}
