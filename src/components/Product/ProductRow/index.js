import React from 'react';
import { View, Text, ViewPropTypes, Image } from 'react-native';
import { string, number } from 'prop-types';

import styles from './styles';

const ProductRow = ({ name, image, quantity, style, imageStyle }) => (
  <View style={[styles.container, style]}>
    <View style={styles.detailsContainer}>
      <Image
        source={{ uri: image }}
        style={[styles.image, imageStyle]}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
    <View style={styles.checkQuantityContainer}>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
    </View>
  </View>
);

ProductRow.propTypes = {
  name: string.isRequired,
  image: string.isRequired,
  quantity: number.isRequired,
  style: ViewPropTypes.style,
  imageStyle: ViewPropTypes.style
};

export default ProductRow;
