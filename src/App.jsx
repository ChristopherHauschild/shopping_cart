import React from 'react';
import { ThemeProvider } from 'styled-components';

import Container from './components/Container';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Container />
  </ThemeProvider>
);

export default App;
