import React, { useCallback, useMemo } from 'react';

import { useToast } from '../../hooks/toast';
import { useProducts } from '../../hooks/products';

import { toCurrency } from '../../utils/currencyFormatter';

import Divider from '../Divider';

import { Wrapper, Total, FreeShipping, Button } from './styles';

const Footer = () => {
  const { addToast } = useToast();
  const { totalPrice } = useProducts();

  const hasFreeShipping = useMemo(() => totalPrice / 100 > 10, [totalPrice]);

  const onButtonClick = useCallback(() => {
    addToast({
      type: 'success',
      title: 'Compra realizada com sucesso!',
      description: `Valor da compra: ${toCurrency(totalPrice)}.`,
    });
  }, [addToast, totalPrice]);

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

      <Button disabled={totalPrice === 0} onClick={() => onButtonClick()}>
        <strong>Finalizar compra</strong>
      </Button>
    </Wrapper>
  );
};

export default Footer;
