import React, { createContext, useCallback, useContext, useState } from 'react';

const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const sumPrice = useCallback((value) => {
    setTotalPrice(value);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        totalPrice,
        sumPrice,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

function useProducts() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('useProducts must be used within an ProductsContext');
  }

  return context;
}

export { ProductsProvider, useProducts };
