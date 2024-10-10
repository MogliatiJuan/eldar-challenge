import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AxiosError } from 'axios';
import { Box, Button, Typography, Container } from '@mui/material';
import { validationMessages } from '@constants/index';
import eldarLogo from '@assets/logo-eldar.png';
import { FormLogin, PrivateRoutes } from '@models/index';
import { validateUser, getValidationError } from '@utilities/index';
import { useAuthStore, useLoaderStore } from '@store/index';
import { InputField } from '@components/index';

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>();

  const navigate = useNavigate();
  const { login, token } = useAuthStore();
  const { setLoader } = useLoaderStore();

  useEffect(() => {
    if (token) {
      navigate(PrivateRoutes.DASHBOARD);
    }
  }, [token, navigate]);

  const onSubmit: SubmitHandler<FormLogin> = (data) => {
    setLoader(true);
    try {
      const isValidUser: boolean = validateUser(data);

      if (!isValidUser) {
        throw new Error(getValidationError('invalidCredentials'));
      }
      login(data.username);
    } catch (error) {
      const err = error as AxiosError;
      const errorCode = err?.code || 'invalidCredentials';

      Swal.fire({
        title: 'Error',
        text: getValidationError(errorCode),
        icon: 'error',
        confirmButtonText: 'Reingresar',
      });
    } finally {
      setLoader(false);
    }
  };

  const inputFields = [
    {
      id: 'username',
      label: 'Usuario',
      type: 'text',
      validation: {
        required: validationMessages.username.required,
      },
      error: errors.username,
      autoFocus: true,
    },
    {
      id: 'password',
      label: 'Contraseña',
      type: 'password',
      validation: {
        required: validationMessages.password.required,
        minLength: {
          value: 8,
          message: validationMessages.password.minLength,
        },
      },
      error: errors.password,
    },
  ];

  return (
    <Container
      maxWidth='sm'
      sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box
          component='img'
          src={eldarLogo}
          alt='eldar-logo'
          loading='lazy'
          sx={{
            width: '100%',
            maxWidth: '80%',
            height: 'auto',
            marginBottom: '1rem',
          }}
        />
        <Typography component='h1' variant='h5'>
          Iniciar sesión
        </Typography>
        <Box component='form' onSubmit={handleSubmit(onSubmit)}>
          {inputFields.map((field) => (
            <InputField
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              register={register(field.id as keyof FormLogin, field.validation)}
              error={field.error}
              autoFocus={field.autoFocus}
            />
          ))}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}>
            Ingresar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
