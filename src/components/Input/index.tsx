import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { IProps } from './interfaces';
import { InputAdornment, TextField } from '@material-ui/core';
import { ErrorText } from './styles';

const Input = ({ name, label, icon, style, ...rest }: IProps) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  label = String(label).toUpperCase();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <TextField
        name={name}
        ref={inputRef}
        id="filled-required"
        label={label}
        variant="outlined"
        style={{ marginBottom: 8, marginTop: 8 }}
        onChange={(e) => {
          const { value } = e.target;
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ padding: 0 }}>
              {icon}
            </InputAdornment>
          ),
        }}
        error={error ? true : false}
        {...rest}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};
export default Input;
