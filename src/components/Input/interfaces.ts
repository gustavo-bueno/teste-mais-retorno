import { OutlinedTextFieldProps } from '@material-ui/core';
import { ReactNode } from 'react';

export interface IProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  name: string;
  icon?: ReactNode;
}
