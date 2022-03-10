import React from 'react';
import s from './Modal.module.scss';

import {AnimatePresence, motion} from 'framer-motion';
import {Button} from '../button';

import {createPortal} from 'react-dom';

type ModalPropsType = {
  open: boolean;
  handleClose: () => void;
  title: string;
};

const overlayVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

const modalVariants = {
  opened: {
    opacity: 1,
    transform: 'translate(-50%, 0%)',
  },
  closed: {
    opacity: 0,
    transform: 'translate(- 50%, 20%)',
  },
};

const Modal: React.FC<ModalPropsType> = React.memo((props) => {
  const {
    open,
    handleClose,
    title,
    children
  } = props;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={s.overlay}
            onClick={handleClose}
            initial='closed'
            animate='opened'
            exit='closed'
            variants={overlayVariants}
            transition={{duration: 0.2}}
          />
          <motion.div
            className={s.modal}
            initial='closed'
            animate='opened'
            exit='closed'
            variants={modalVariants}
            transition={{duration: 0.2}}
          >
            {title && (<header>
              <h2>{title}</h2>
            </header>)}
            <div className={s.modalContent}>
              {children}
            </div>
            <div className={s.modalAction}>
              <Button className='closed' onClick={handleClose}>Closed</Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
});

export {Modal};
