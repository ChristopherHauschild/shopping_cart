import React from 'react';
import PropTypes from 'prop-types';

import SwitchButton from '../../../components/SwitchButton';
import Container from '../../../components/Container';

import Product from '../../../components/Product';
import Loading from '../../../components/Loading';
import NotContent from '../../../components/NotContent';

const CartPage = ({ data, loading }) => (
  <>
    <SwitchButton />

    <Container>
      {loading && <Loading />}

      {!loading &&
        data.length > 0 &&
        data.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.imageUrl}
          />
        ))}

      {!loading && !data.length > 0 && <NotContent />}
    </Container>
  </>
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
