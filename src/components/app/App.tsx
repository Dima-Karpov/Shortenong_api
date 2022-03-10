import React from 'react';
import {Form} from '../form';

import {Header} from '../header';
import {Hero} from '../hero';

import {Shortens} from '../shortens';
import {Features} from '../features';

import {CallToAction} from './callToAction';
import {Footer} from '../footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Form />
      <Shortens />
      <Features />
      <CallToAction />
      <Footer />
    </>
  );
}

export {App}