/* eslint-disable no-magic-numbers */
import { expirationTimeInHours } from '@constants/index';
import { MockUsers, JWTHeader, JWTPayload, Roles } from '@models/index';

const createFakeJWT = (username: string): string => {
  const header: JWTHeader = {
    alg: 'HS256',
    typ: 'JWT',
  };

  const payload: JWTPayload = {
    sub: username,
    username: username,
    role: username === MockUsers.ADMIN_USER ? Roles.ADMIN : Roles.USER,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * expirationTimeInHours,
  };

  const base64Header = btoa(JSON.stringify(header));
  const base64Payload = btoa(JSON.stringify(payload));
  const signature = 'simulated-signature';

  return `${base64Header}.${base64Payload}.${signature}`;
};

export default createFakeJWT;
