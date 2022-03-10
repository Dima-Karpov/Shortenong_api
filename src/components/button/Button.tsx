import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './Button.module.scss';

import cn from 'classnames';


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {variant?: string, size?: string}

const Button: React.FC<ButtonPropsType> = (props) => {
  const {
    onClick,
    variant = '',
    size = 'medium',
    type = 'button',
    children,
    disabled,
    ...restProps
  } = props;

  const mainCn = cn(
    s.button,
    s[size],
    s[variant],
  );

  return (
    <button
      className={mainCn}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
};

export {Button}