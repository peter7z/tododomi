import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { object, func } from 'prop-types';

import translate from 'utils/i18n';
import TouchableIcon from 'components/Common/TouchableIcon';
import Chevron, { ChevronDirections } from 'components/Icons/Chevron';
import { StopIcon } from 'components/Icons';
import { greyColor } from 'constants/styleConstants';
import styles from './styles';

const OrdersGroup = ({
  group,
  group: { deliveryTime, grocery, ordersCount, completedOrdersCount, active },
  onEnterGroup
}) => (
  <View style={styles.container}>
    <Image style={styles.logo} source={{ uri: grocery.logo.smallSize.url }} />
    <View style={styles.info}>
      <View style={styles.infoTop}>
        <Text style={styles.time}>{deliveryTime}</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.name}>{grocery.name}</Text>
      </View>
      <View style={styles.infoBottom}>
        <StopIcon />
        <Text style={styles.count}>{completedOrdersCount}/{ordersCount}</Text>
      </View>
    </View>
    {active
      ? (
        <TouchableOpacity onPress={() => onEnterGroup(group)} style={styles.active}>
          <Text style={styles.activeText}>{translate('ORDERS.active')}</Text>
        </TouchableOpacity>
      )
      : (
        <TouchableIcon
          onPress={() => onEnterGroup(group)}
          icon={<Chevron color={greyColor} direction={ChevronDirections.RIGHT} />}
        />
      )
    }
  </View>
);

OrdersGroup.propTypes = {
  group: object.isRequired,
  onEnterGroup: func.isRequired,
};

export default OrdersGroup;
