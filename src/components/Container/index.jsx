import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import Divider from '../Divider';

import { Wrapper } from './styles';

const Container = ({ children }) => (
  <Wrapper>
    <Header />
    <Divider />

    {children}

    <Divider />
    <Footer />
  </Wrapper>
);

export default Container;
