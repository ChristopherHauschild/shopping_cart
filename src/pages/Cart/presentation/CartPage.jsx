import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../../components/Container';
import Product from '../../../components/Product';
import Loading from '../../../components/Loading';
import NotContent from '../../../components/NotContent';

const CartPage = ({ data, loading }) => (
  <Container>
    {loading && <Loading />}

    {!loading &&
      data.length &&
      data.map((item) => (
        <Product
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.imageUrl}
        />
      ))}

    {!loading && !data.length && <NotContent />}
  </Container>
);

CartPage.propTypes = {
  data: PropTypes.shape([PropTypes.shape({})]),
  loading: PropTypes.bool,
};

CartPage.defaultProps = {
  data: [],
  loading: false,
};

export default CartPage;
