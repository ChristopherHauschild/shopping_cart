import React from 'react';

import Divider from '../Divider';

import { Wrapper, Total, Button } from './styles';

const Footer = () => (
  <Wrapper>
    <Total>
      <strong>Total</strong>
      <strong>R$ 0,00</strong>
    </Total>

    <Divider />

    <Button>
      <strong>Finalizar compra</strong>
    </Button>
  </Wrapper>
);

export default Footer;
