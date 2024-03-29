export type SelectFieldOptionKey = string;

export interface SelectFieldOption {
  key: SelectFieldOptionKey;
  label: string;
  subText?: string;
  data?: any;
  groupName?: string;
}

interface SharedProps {
  options: Array<SelectFieldOption>;
  label?: string;
  helpText?: string;
  required?: boolean;
  loading?: boolean;
  disabled?: boolean;
  pending?: boolean;
}

export interface SingleSelectFieldProps extends SharedProps {
  currentValue: SelectFieldOptionKey;
  onChange: (newValue: SelectFieldOptionKey, data?: any) => void;
}

export interface MultiSelectFieldProps extends SharedProps {
  currentValues: Array<SelectFieldOptionKey>;
  onChange: (newValues: Array<SelectFieldOptionKey>, data?: Array<any>) => void;
}
