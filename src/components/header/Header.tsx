import React, {useCallback, useState} from 'react';
import useMatchMedia from 'use-match-media-hook';

import s from './Header.module.scss';
import Logo from '../../images/logo.svg';

import {IoMenu} from 'react-icons/io5';
import {Menu} from './menu';
import {AnimatePresence, motion} from 'framer-motion';
import {Modal} from '../modal';
import {Login, SingUp} from '../singUp';

export type MenuItemsType = {
  url: string,
  text: string,
};

const menuItems: MenuItemsType[] = [
  {
    url: '#',
    text: 'Features',
  },
  {
    url: '#',
    text: 'Prices',
  },
  {
    url: '#',
    text: 'Resources',
  },
];

const queries = [
  '(max-width: 766px)',
  '(min-width: 767px)'
]

const Header: React.FC = (porps) => {
  const [mobile] = useMatchMedia(queries);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [isSignupOpen, setIsSignupOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  const openSignup = useCallback(() => setIsSignupOpen(true), [isSignupOpen]);
  const closeSignup = useCallback(() => setIsSignupOpen(false), [isSignupOpen]);
  const openLogin = useCallback(() => setIsLoginOpen(true), [isLoginOpen]);
  const closeLogin = useCallback(() => setIsLoginOpen(false), [isLoginOpen]);

  return (
    <>
      <header className={`${ s.header } container`}>
        <img src={Logo} alt="logo" className={s.logo} />
        {mobile ? (
          <IoMenu
            className={s.burger}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />

        ) : (
          <Menu links={menuItems} handleSignup={openSignup} handleLogin={openLogin} />
        )}
        <AnimatePresence>
          {
            showMobileMenu && mobile && (
              <motion.div
                initial={{opacity: 0, height: 0}}
                animate={{opacity: 1, height: 'auto'}}
                exit={{opacity: 0, height: 0}}
                className={s.mobileMenu}
              >
                <Menu links={menuItems} handleSignup={openSignup} handleLogin={openLogin} />
              </motion.div>
            )
          }
        </AnimatePresence>
      </header>

      <Modal open={isSignupOpen} title="Sign Up" handleClose={closeSignup}>
        <SingUp closeModal={closeSignup} />
      </Modal>
      <Modal open={isLoginOpen} title="Sign In" handleClose={closeLogin}>
        <Login closeModal={closeLogin} />
      </Modal>
    </>
  )
};

export {Header}