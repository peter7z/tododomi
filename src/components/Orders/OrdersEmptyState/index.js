import React from 'react';
import { View, Text } from 'react-native';

import translate from 'utils/i18n';
import { CartIcon } from 'components/Icons';
import { primaryActiveColorWithHalfOpacity } from 'constants/styleConstants';
import styles, { cartSize } from './styles';

const OrderGroup = () => (
  <View style={styles.container}>
    <CartIcon width={cartSize} height={cartSize} color={primaryActiveColorWithHalfOpacity} />
    <Text style={styles.title}>{translate('ORDERS.emptyOrdersTitle')}</Text>
    <Text style={styles.description}>{translate('ORDERS.emptyOrdersDescription')}</Text>
    <Text style={styles.thanks}>{translate('ORDERS.emptyOrdersThanks')}</Text>
  </View>
);

export default OrderGroup;
