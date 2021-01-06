import React, { useState, useEffect } from 'react';
import { useQueryParams, StringParam } from 'use-query-params';

import { useProducts } from '../../hooks/products';

import { Wrapper, Button } from './styles';

const SwitchButton = () => {
  const { totalPrice } = useProducts();

  const [query, setQuery] = useQueryParams({
    _type: StringParam,
  });

  const [selected, setSelected] = useState(() =>
    query?._type !== 'moreThan' ? 'lessThan' : 'moreThan'
  );

  useEffect(() => {
    if (query?._type !== 'moreThan') {
      setSelected('lessThan');
      return;
    }
    setSelected('moreThan');
  }, [query]);

  return (
    <Wrapper>
      <Button
        selected={selected === 'lessThan'}
        disabled={totalPrice === 0}
        onClick={() => setQuery({ _type: 'lessThan' })}
      >
        <strong>Abaixo de R$ 10,00</strong>
      </Button>

      <Button
        selected={selected === 'moreThan'}
        disabled={totalPrice === 0}
        onClick={() => setQuery({ _type: 'moreThan' })}
      >
        <strong>Acima de R$ 10,00</strong>
      </Button>
    </Wrapper>
  );
};

export default SwitchButton;
