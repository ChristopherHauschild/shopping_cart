import React from 'react';

import { useProducts } from '../../hooks/products';

import { toCurrency } from '../../utils/currencyFormatter';

import Divider from '../Divider';

import { Wrapper, Total, Button } from './styles';

const Footer = () => {
  const { totalPrice } = useProducts();

  return (
    <Wrapper>
      <Total>
        <strong>Total</strong>
        <strong>{toCurrency(totalPrice)}</strong>
      </Total>

      <Divider />

      <Button disabled={totalPrice === 0}>
        <strong>Finalizar compra</strong>
      </Button>
    </Wrapper>
  );
};

export default Footer;
