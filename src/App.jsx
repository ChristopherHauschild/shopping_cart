import React, { useEffect, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import useFetch from './services/hooks/useFetch';

import Container from './components/Container';
import Loading from './components/Loading';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import Product from './components/Product';

const App = () => {
  const { data: dataLessThan, loading: loadingLessThan, get: getLessThan } = useFetch();

  useEffect(() => {
    const fetch = async () => {
      await getLessThan({ url: '/lessThan' });
    };
    fetch();
  }, [getLessThan]);

  const parsedData = useMemo(() => {
    const data = dataLessThan?.items || [];
    return data;
  }, [dataLessThan]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Container>
        {loadingLessThan && <Loading />}

        {!loadingLessThan &&
          parsedData.length &&
          parsedData.map((item) => (
            <Product
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.imageUrl}
            />
          ))}
      </Container>
    </ThemeProvider>
  );
};

export default App;
