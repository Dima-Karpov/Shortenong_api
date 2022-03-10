import React from 'react';
import s from './Hero.module.scss';

import Img from '../../images/illustration-working.svg';
import {Button} from '../button';


const Hero: React.FC = () => {
  return (
    <section className={`${ s.hero } container`}>
      <div className={s.imgContainer}>
        <img src={Img} alt='hero' className={s.img} />
      </div>
      <article className={s.text}>
        <h1 className={s.title}>More than just shorter links</h1>
        <p className={s.description}>
          Build your barnd's recognition and get detailed insights on
          how your links are performing.
        </p>
        <Button size='large'>Get Started</Button>
      </article>
    </section>
  )
};

export {Hero};
