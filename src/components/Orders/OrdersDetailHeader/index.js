import React from 'react';
import { View, Text } from 'react-native';
import { object, func, number } from 'prop-types';

import Avatar from 'components/Common/Avatar';
import TouchableIcon from 'components/Common/TouchableIcon';
import Chevron, { ChevronDirections } from 'components/Icons/Chevron';
import { LocationIcon } from 'components/Icons';
import { openMapAndDriveTo } from 'utils/helpers';
import styles, { groceryImageSize, locationIconSize } from './styles';

const OrdersDetailHeader = ({
  group: {
    shop: {
      name,
      logo,
      address: { name: address }
    }
  },
  order: { id, address: { latitude, longitude } },
  onBack,
  height,
}) => (
  <View style={[styles.container, { height }]}>
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
          <Text style={styles.title}>
            #{id}
            <Text style={styles.separator}> | </Text>
            {name}
          </Text>
        </View>
        <Text style={styles.subtitle}>{address}</Text>
      </View>
    </View>
    <View style={styles.drive}>
      <TouchableIcon onPress={() => openMapAndDriveTo(latitude, longitude)}>
        <LocationIcon width={locationIconSize} height={locationIconSize} />
      </TouchableIcon>
    </View>
  </View>
);

OrdersDetailHeader.propTypes = {
  group: object.isRequired,
  order: object.isRequired,
  onBack: func.isRequired,
  height: number,
};

export default OrdersDetailHeader;
