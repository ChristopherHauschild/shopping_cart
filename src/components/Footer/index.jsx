import React, { useMemo } from 'react';

import { useProducts } from '../../hooks/products';

import { toCurrency } from '../../utils/currencyFormatter';

import Divider from '../Divider';

import { Wrapper, Total, FreeShipping, Button } from './styles';

const Footer = () => {
  const { totalPrice } = useProducts();

  const hasFreeShipping = useMemo(() => totalPrice / 100 > 10, [totalPrice]);

  return (
    <Wrapper>
      <Total>
        <strong>Total</strong>
        <strong>{toCurrency(totalPrice)}</strong>
      </Total>

      {hasFreeShipping && (
        <FreeShipping>
          <span>Parabéns, sua compra tem frete grátis!</span>
        </FreeShipping>
      )}

      <Divider />

      <Button disabled={totalPrice === 0}>
        <strong>Finalizar compra</strong>
      </Button>
    </Wrapper>
  );
};

export default Footer;
