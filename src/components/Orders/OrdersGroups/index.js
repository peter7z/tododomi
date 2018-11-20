import React from 'react';
import { View, Text } from 'react-native';
import { string, bool, array, func } from 'prop-types';

import TouchableIcon from 'components/Common/TouchableIcon';
import Chevron, { ChevronDirections } from 'components/Icons/Chevron';
import OrderGroup from './OrdersGroup';
import styles from './styles';

const OrdersGroups = ({ day, groups, isCollapsed, onCollapse, onEnterOrder }) => (
  <View>
    <View style={styles.header}>
      <Text style={styles.day}>{day}</Text>
      <TouchableIcon
        onPress={() => onCollapse(day)}
        icon={<Chevron direction={isCollapsed ? ChevronDirections.UP : ChevronDirections.DOWN} />}
      />
    </View>
    {!isCollapsed && groups.map(group => (
      <OrderGroup
        key={group.deliveryTime}
        group={group}
        onEnterOrder={onEnterOrder}
      />
    ))}
  </View>
);

OrdersGroups.propTypes = {
  day: string.isRequired,
  groups: array.isRequired,
  isCollapsed: bool.isRequired,
  onCollapse: func.isRequired,
  onEnterOrder: func.isRequired,
};

export default OrdersGroups;
