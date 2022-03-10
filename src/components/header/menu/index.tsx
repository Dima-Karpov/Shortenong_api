import React from 'react';
import {Button} from '../../button';

import {MenuItemsType} from '../Header';
import s from './index.module.scss';

type MenuPropsType = {
  links: MenuItemsType[];
  handleSignup: () => void;
  handleLogin: () => void;
};

export const Menu: React.FC<MenuPropsType> = React.memo((props) => {
  const {
    links,
    handleLogin,
    handleSignup,
  } = props;

  const token = null;

  return (
    <div className={s.menu}>
      <div className={s.pages}>
        {links.map(link => (
          <a
            href={link.url}
            key={link.text}
            className={s.link}
          >
            {link.text}
          </a>
        ))}
      </div>
      <div className={s.login}>
        {token ? (
          <Button
          >
            Log out
          </Button>
        ) : (
          <>
            <Button variant="link" onClick={handleLogin}>Login</Button>
            <Button onClick={handleSignup}>Sign Up</Button>
          </>
        )}
      </div>
    </div>
  )
})