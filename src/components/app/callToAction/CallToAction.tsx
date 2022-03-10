import React from 'react';
import {Button} from '../../button';
import s from './CallToAction.module.scss';

const CallToAction: React.FC = () => {
  return (
    <section className={s.callToAction}>
      <h2>Boots your links today</h2>
      <Button>
        Get Started
      </Button>
    </section>
  )
}

export {CallToAction};