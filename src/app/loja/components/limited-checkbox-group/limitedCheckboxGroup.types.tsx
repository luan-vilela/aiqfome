export interface OptionsSwitch {
  id: string;
  label?: string;
  price?: number;
  oldPrice?: number;
  value: string;
}

export interface LimitedCheckboxGroupProps {
  title: string;
  subtitle?: string;
  required?: boolean;
  options: OptionsSwitch[];
  min?: number;
  max: number;
  initialSelected?: string[];
  onChange?: (selected: string[], hasMinReached?: boolean) => void;
}
