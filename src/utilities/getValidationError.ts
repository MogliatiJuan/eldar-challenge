import { TypeWithKey } from '@models/index';

export const getValidationError = (errorCode: string) => {
  const errorMessages: TypeWithKey<string> = {
    DEFAULT: 'Ha ocurrido un error',
    invalidCredentials: 'Credenciales inválidas',
    invalidForm: 'El formulario está incompleto',
    ERR_NETWORK: 'Error de red',
    ERR_BAD_REQUEST: 'Petición errónea',
  };
  return errorMessages[errorCode] || errorMessages.DEFAULT;
};

export const getValidationSuccess = (successCode: string) => {
  const successMessages: TypeWithKey<string> = {
    DEFAULT: 'Confirmado',
    createPost: 'El post ha sido creado correctamente',
    modifyPost: 'El post ha sido editado correctamente',
  };
  return successMessages[successCode] || successMessages.DEFAULT;
};
