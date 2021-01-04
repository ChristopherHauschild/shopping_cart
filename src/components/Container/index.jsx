import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import Divider from '../Divider';

import { Wrapper } from './styles';

const Container = () => (
  <Wrapper>
    <Header />
    <Divider />
    <span>Conteúdo</span>
    <Divider />
    <Footer />
  </Wrapper>
);

export default Container;
