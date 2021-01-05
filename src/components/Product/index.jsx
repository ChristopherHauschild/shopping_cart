import React from 'react';
import PropTypes from 'prop-types';

import { toCurrency } from '../../utils/currencyFormatter';

import { Wrapper, Image, Infos, Name, Price } from './styles';

const Product = ({ name, price, image }) => (
  <Wrapper>
    <Image>
      <img src={image} alt={name} />
    </Image>

    <Infos>
      <Name>{name}</Name>
      <Price>{toCurrency(price)}</Price>
    </Infos>
  </Wrapper>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Product;
