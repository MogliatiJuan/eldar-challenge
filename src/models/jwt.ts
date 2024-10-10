import { Roles } from './roles';

export interface JWTHeader {
  alg: string;
  typ: string;
}

export interface JWTPayload {
  sub: string;
  username: string;
  role: Roles;
  iat: number;
  exp: number;
}
