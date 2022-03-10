import React from 'react';
import {Form} from './Form';

type LoginPropsType = {
  closeModal: () => void;
};

const Login: React.FC<LoginPropsType> = React.memo((props) => {
  const {closeModal, } = props;

  const handleLogin = (email: string, password: string) => {
    closeModal();
  };

  return (
    <Form
      handleClick={handleLogin}
      title='Login'
    />
  )
});

export {Login};