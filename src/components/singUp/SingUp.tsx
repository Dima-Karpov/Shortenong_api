import React from 'react';
import {Form} from './Form';

type SingUpPropsType = {
  closeModal: () => void;
};

const SingUp: React.FC<SingUpPropsType> = React.memo((props) => {
  const {closeModal, } = props;

  const handleRegister = (email: string, password: string) => {
    closeModal();
  };

  return (
    <Form
      handleClick={handleRegister}
      title='Register'
    />
  )
});

export {SingUp};