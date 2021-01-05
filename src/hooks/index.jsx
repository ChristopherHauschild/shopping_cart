import React from 'react';

import { ProductsProvider } from './products';

const AppProvider = ({ children }) => <ProductsProvider>{children}</ProductsProvider>;

export default AppProvider;
