import React, { useEffect, useMemo } from 'react';
import { useQueryParams, StringParam } from 'use-query-params';

import { useProducts } from '../../hooks/products';

import useFetch from '../../services/hooks/useFetch';

import CartPage from './presentation/CartPage';

const Cart = () => {
  const { sumPrice } = useProducts();

  const { data: dataLessThan, loading: loadingLessThan, get: getLessThan } = useFetch();
  const { data: dataMoreThan, loading: loadingMoreThan, get: getMoreThan } = useFetch();

  const [query] = useQueryParams({
    _type: StringParam,
  });

  useEffect(() => {
    const fetch = async () => {
      await getLessThan({ url: '/lessThan' });
      await getMoreThan({ url: '/moreThan' });
    };
    fetch();
  }, [getLessThan, getMoreThan]);

  useEffect(() => {
    const data = query?._type !== 'moreThan' ? dataLessThan : dataMoreThan;

    if (!data) return;

    const dataItems = data?.items || [];
    const total = dataItems.reduce((acc, cur) => acc + cur?.price, 0);

    sumPrice(total);
  }, [query, dataLessThan, dataMoreThan, sumPrice]);

  const parsedData = useMemo(() => {
    const data =
      query?._type !== 'moreThan' ? dataLessThan?.items || [] : dataMoreThan?.items || [];
    return data;
  }, [query, dataLessThan, dataMoreThan]);

  return <CartPage data={parsedData} loading={loadingLessThan || loadingMoreThan} />;
};

export default Cart;
