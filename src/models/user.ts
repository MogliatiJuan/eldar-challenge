import { Id } from '../utilities';
import { Roles } from './roles';

export interface User {
  id: Id;
  username: string;
  email: string;
  role: Roles;
}
