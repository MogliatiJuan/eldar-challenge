import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { TextField } from '@mui/material';

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  helperText?: string;
  autoFocus?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  register,
  error,
  helperText,
  autoFocus = false,
  ...props
}) => {
  return (
    <TextField
      margin='normal'
      fullWidth
      id={id}
      label={label}
      type={type}
      {...register}
      error={!!error}
      helperText={error ? error.message : helperText}
      autoFocus={autoFocus}
      {...props}
    />
  );
};

export default InputField;
