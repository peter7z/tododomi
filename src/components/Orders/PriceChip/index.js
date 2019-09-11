import React from 'react';
import { View, Text } from 'react-native';
import { string, bool } from 'prop-types';
import translate from 'utils/i18n';

import styles from './styles';

const PriceChip = ({ price, orderDetailsScreen }) => (
  <View style={[styles.container, price && styles.background, orderDetailsScreen && styles.paddingVertical, !price && orderDetailsScreen && styles.greenBackground]} >
    <Text style={styles.text}>
      {!price && !orderDetailsScreen && '  -  '}
      <Text style={price || orderDetailsScreen ? styles.whiteText : styles.greenText}>
        {price ? `${translate('ORDERS.total')}${price}` : translate('ORDERS.paid')}
      </Text>
    </Text>
  </View>
);

PriceChip.propTypes = {
  price: string,
  orderDetailsScreen: bool,
};

export default PriceChip;
