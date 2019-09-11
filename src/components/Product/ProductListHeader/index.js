import React from 'react';
import { View, Text } from 'react-native';
import { object } from 'prop-types';

import Avatar from 'components/Common/Avatar';
import TouchableIcon from 'components/Common/TouchableIcon';
import { PhoneIcon } from 'components/Icons';
import { callTo } from 'utils/helpers';
import styles, { groceryImageSize, phoneIconSize } from './styles';

const ProductListHeader = ({
  consumer: { fullName, avatar, phoneNumber },
  order: { address: { name } }
}) => (
  <View style={[styles.container]}>
    <View style={styles.content}>
      <View style={styles.leftContainer}>
        <View style={styles.avatarContainer}>
          <Avatar
            name={fullName}
            avatar={avatar}
            width={groceryImageSize}
            height={groceryImageSize}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoSubContainer}>
            <Text style={styles.title}>{fullName}</Text>
          </View>
          <Text numberOfLines={2} style={styles.subtitle}>{name}</Text>
        </View>
      </View>
      <View style={styles.phone}>
        <TouchableIcon onPress={() => phoneNumber && callTo(phoneNumber)}>
          <PhoneIcon width={phoneIconSize} height={phoneIconSize} />
        </TouchableIcon>
      </View>
    </View>
  </View>
);

ProductListHeader.propTypes = {
  consumer: object.isRequired,
  order: object.isRequired,
};

export default ProductListHeader;
