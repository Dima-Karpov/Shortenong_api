import React from 'react';
import s from './Footer.module.scss';

import {ReactComponent as Logo} from '../../images/logo.svg';
import {footer} from './data';

import {MenuType} from './data'

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className={`${ s.content } container`}>
        <Logo className={s.logo} />

        <div className={s.menu}>
          {footer.menu.map(menuItem => (
            <MenuGroup key={menuItem.id} {...menuItem} />
          ))}
        </div>

        <div className={s.socials}>
          {footer.socials.map(({id, url, image: Svg}) => (
            <a key={id} href={url}><Svg /></a>
          ))}
        </div>

      </div>
    </footer>
  )
};

const MenuGroup = ({groupTitle, links}: MenuType) => (
  <div className={s.menuGroup}>
    <h4>{groupTitle}</h4>
    {links.map(link => (
      <a key={link.text} href={link.url}>{link.text}</a>
    ))}
  </div>
);

export {Footer};