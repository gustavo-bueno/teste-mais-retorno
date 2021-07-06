import { ButtonProps } from '@material-ui/core';

export interface IProps extends Omit<ButtonProps, 'variant'> {
  title: string;
}
