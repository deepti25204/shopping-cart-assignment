import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
  FormInputError
} from './form-input.styles';

const FormInput = ({ handleChange, label, error, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {
      label 
      ? <FormInputLabel>{label}</FormInputLabel>
      : null
    }
    {
      error 
      ? <FormInputError id={`${props.name}Error`}>{error}</FormInputError>
      : null
    }
  </GroupContainer>
);

export default FormInput;
