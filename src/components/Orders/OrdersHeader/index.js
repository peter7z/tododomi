import React from 'react';
import { View, Text } from 'react-native';
import { object, func } from 'prop-types';

import Avatar from 'components/Common/Avatar';
import TouchableIcon from 'components/Common/TouchableIcon';
import Chevron, { ChevronDirections } from 'components/Icons/Chevron';
import styles, { groceryImageSize } from './styles';

const OrdersHeader = ({
  group: {
    shop: { name, logo, address: { name: addressName } },
    ordersCount,
    completedOrdersCount,
    deliveryTime
  },
  onBack
}) => (
  <View style={styles.container}>
    <TouchableIcon
      icon={<Chevron direction={ChevronDirections.LEFT} />}
      onPress={onBack}
    />
    <View style={styles.middleContainer}>
      <View style={styles.avatarContainer}>
        <Avatar
          name={name}
          avatar={logo}
          width={groceryImageSize}
          height={groceryImageSize}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoSubContainer}>
          <Text style={styles.title}>{deliveryTime}</Text>
          <Text style={styles.quantity}>({completedOrdersCount}/{ordersCount})</Text>
        </View>
        <Text style={styles.subtitle}>{addressName}</Text>
      </View>
    </View>
  </View>
);

OrdersHeader.propTypes = {
  group: object.isRequired,
  onBack: func.isRequired,
};

export default OrdersHeader;
