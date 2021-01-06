import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ThemeProvider } from 'styled-components';

import AppProvider from './hooks';

import Routes from './routes';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

const App = () => (
  <Router>
    <QueryParamProvider ReactRouterRoute={Route}>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Routes />
          <GlobalStyles />
        </ThemeProvider>
      </AppProvider>
    </QueryParamProvider>
  </Router>
);

export default App;
