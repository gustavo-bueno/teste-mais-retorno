import { IUser } from '../../../models/user.model';

export interface IProps {
  onSubmmited: (data: IUser) => void;
}
