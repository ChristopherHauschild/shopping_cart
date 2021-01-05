import { useState, useCallback } from 'react';

import api from '../api';

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);

  const get = useCallback(async ({ url, config }) => {
    try {
      setLoading(true);

      const response = await api.get(url, config);
      setData(response?.data);

      return Promise.resolve(response?.data);
    } catch (err) {
      return Promise.reject(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    get,
    data,
    loading,
  };
};

export default useFetch;
