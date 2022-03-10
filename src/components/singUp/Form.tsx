import React, {useState} from 'react';
import {Button} from '../button';
import s from './Form.module.scss';

type FormPropsType = {
  handleClick: (email: string, password: string) => void;
  title: string;
}

const Form: React.FC<FormPropsType> = React.memo((props) => {
  const {
    handleClick,
    title
  } = props;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className={s.form}>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />
      <Button onClick={() => handleClick(email, password)}>
        {title}
      </Button>

    </div>
  )
});

export {Form};