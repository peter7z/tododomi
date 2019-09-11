import React from 'react';
import { View, Text } from 'react-native';
import { object, array } from 'prop-types';

import PriceChip from 'components/Orders/PriceChip';
import translate from 'utils/i18n';
import ProductListHeader from '../ProductListHeader';
import ProductRow from '../ProductRow';
import { styles, stylesProps } from './styles';

const ProductList = ({ consumer, products, order }) => (
  <View>
    <ProductListHeader consumer={consumer} order={order} />
    <View style={styles.headerContainer}>
      <Text style={styles.name}>{translate('ORDER_ITEMS_SCREEN.title')}</Text>
      <PriceChip orderDetailsScreen price={order.totalPrice} />
    </View>
    {products.map(({ id, smallImage, name, countOfVariants }, index) => {
      const { productRow, productImage } = stylesProps(index % 2 === 0);
      return <ProductRow
        key={`product-${id}`}
        image={smallImage}
        name={name}
        quantity={countOfVariants}
        style={productRow}
        imageStyle={productImage}
      />;
    })}
  </View>
);

ProductList.propTypes = {
  consumer: object.isRequired,
  order: object.isRequired,
  products: array.isRequired,
};

export default ProductList;
