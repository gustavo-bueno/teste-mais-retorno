import React from 'react';

import { IProps } from './interfaces';
import { CustomButton } from './styles';

export function Button({ title, endIcon, style, ...rest }: IProps) {
  if (endIcon) {
    return (
      <CustomButton color="primary" endIcon={endIcon} {...rest}>
        <p style={{ fontWeight: 700, color: '#FFF' }}>{title}</p>
      </CustomButton>
    );
  }
  return (
    <CustomButton color="secondary" {...rest}>
      <p style={{ fontWeight: 700 }}>{title}</p>
    </CustomButton>
  );
}
