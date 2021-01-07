import { useState, useCallback } from 'react';

import { useToast } from '../../hooks/toast';

import api from '../api';

const useFetch = () => {
  const { addToast } = useToast();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);

  const get = useCallback(
    async ({ url, config }) => {
      try {
        setLoading(true);

        const response = await api.get(url, config);
        setData(response?.data);

        return Promise.resolve(response?.data);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Houve um problema!',
          description: 'Não foi possível se conectar ao servidor.',
        });

        return Promise.reject(err);
      } finally {
        setLoading(false);
      }
    },
    [addToast]
  );

  return {
    get,
    data,
    loading,
  };
};

export default useFetch;
