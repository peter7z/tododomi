import React from 'react';
import { View, Text } from 'react-native';
import { object } from 'prop-types';

import Avatar from 'components/Common/Avatar';
import translate from 'utils/i18n';
import { CheckIcon } from 'components/Icons';
import styles, {
  groceryLogoSize,
  checkSize,
  addressLines,
  addressMode
} from './styles';

const OrdersRowHeader = ({ grocery: { name, logo, address, address: { name: addressName } } }) => (
  <View style={styles.container}>
    <Avatar
      avatar={logo}
      width={groceryLogoSize}
      height={groceryLogoSize}
    />
    <View style={styles.row}>
      <Text style={styles.name}><Text style={styles.nameBold}>{name}</Text> ({translate('ORDERS_GROUP.store')})</Text>
      {address &&
        <Text
          numberOfLines={addressLines}
          ellipsizeMode={addressMode}
          style={styles.address}
        >
          {addressName}
        </Text>
      }
    </View>
    <View style={styles.checkContainer}><CheckIcon width={checkSize} height={checkSize} /></View>
  </View>
);

OrdersRowHeader.propTypes = {
  grocery: object.isRequired
};

export default OrdersRowHeader;
