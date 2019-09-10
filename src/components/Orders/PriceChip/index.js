import React from 'react';
import { View, Text } from 'react-native';
import { string } from 'prop-types';
import translate from 'utils/i18n';

import styles from './styles';

const PriceChip = ({ price, ...props }) => (
  <View style={[styles.container, price && styles.background]} {...props} >
    <Text style={styles.text}>
      {!price && '  -  '}
      <Text style={price ? styles.whiteText : styles.greenText}>
        {price ? `${translate('ORDERS.total')}${price}` : translate('ORDERS.paid')}
      </Text>
    </Text>
  </View>
);

PriceChip.propTypes = {
  price: string,
};

export default PriceChip;
