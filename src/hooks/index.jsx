import React from 'react';

import { ToastProvider } from './toast';
import { ProductsProvider } from './products';

const AppProvider = ({ children }) => (
  <ToastProvider>
    <ProductsProvider>{children}</ProductsProvider>
  </ToastProvider>
);

export default AppProvider;
