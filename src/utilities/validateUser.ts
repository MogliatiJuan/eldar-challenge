import users from '@mocks/users.json';
import { FormLogin } from '@models/index';

export const validateUser = (user: FormLogin): boolean => {
  const { username, password } = user;
  const foundUser = users.find(
    (u) => u.username === username && u.password === password,
  );

  return !!foundUser;
};
