import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  labelLeft?: boolean;
  label?: React.ReactNode;
  checkboxInputStyle?: React.CSSProperties;
}
