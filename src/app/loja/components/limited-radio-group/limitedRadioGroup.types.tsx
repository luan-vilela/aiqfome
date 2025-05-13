export interface OptionsRadio {
  id: string;
  name: string;
  label?: string;
  price?: number;
  oldPrice?: number;
  value: string;
}

export interface LimitedRadioGroupProps {
  title: string;
  subtitle?: string;
  required?: boolean;
  options: OptionsRadio[];
  initialSelected?: string[];
  onChange?: (selected: string, hasMihasMinReached?: boolean) => void;
}
