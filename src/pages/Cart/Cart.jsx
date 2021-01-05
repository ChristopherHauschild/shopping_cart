import React, { useEffect, useMemo } from 'react';

import { useProducts } from '../../hooks/products';

import useFetch from '../../services/hooks/useFetch';

import CartPage from './presentation/CartPage';

const Cart = () => {
  const { data: dataLessThan, loading: loadingLessThan, get: getLessThan } = useFetch();
  const { sumPrice } = useProducts();

  useEffect(() => {
    const fetch = async () => {
      await getLessThan({ url: '/lessThan' });
    };
    fetch();
  }, [getLessThan]);

  useEffect(() => {
    if (!dataLessThan) return;

    const data = dataLessThan?.items || [];
    const total = data.reduce((acc, cur) => acc + cur?.price, 0);

    sumPrice(total);
  }, [dataLessThan, sumPrice]);

  const parsedData = useMemo(() => {
    const data = dataLessThan?.items || [];
    return data;
  }, [dataLessThan]);

  return <CartPage data={parsedData} loading={loadingLessThan} />;
};

export default Cart;
