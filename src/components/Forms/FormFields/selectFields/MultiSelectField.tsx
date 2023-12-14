import {MultiSelectFieldProps, SelectFieldOptionKey} from './SelectFields.types';
import {Autocomplete} from '@mui/material';
import {
  getSelectFieldOptionKey,
  getSelectFieldOptionLabel,
  isSelectFieldOptionEqualToValue,
  renderSelectFieldInput
} from './SelectFields.helpers';
import React from 'react';

const MultiSelectField = (props: MultiSelectFieldProps) => {
  const {
    options,
    currentValues,
    onChange,
    label
  } = props;

  const onAutocompleteChange = (event: React.SyntheticEvent, values: Array<SelectFieldOptionKey>) => {
    const matchingOptions = options.filter(option => values.includes(option.key));
    const selectedData = matchingOptions.filter(option => Boolean(option.data)).map(option => option.data);
    onChange(values, selectedData);
  }

  return (
    <Autocomplete
      multiple={true}
      renderInput={(params) => renderSelectFieldInput(params, { label: label })}
      options={options}
      value={currentValues}
      onChange={onAutocompleteChange}
      getOptionLabel={getSelectFieldOptionLabel}
      getOptionKey={getSelectFieldOptionKey}
      isOptionEqualToValue={isSelectFieldOptionEqualToValue}
      filterSelectedOptions={true}
    />
  )
}

export default MultiSelectField;