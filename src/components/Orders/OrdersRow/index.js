import React from 'react';
import { View, Text } from 'react-native';
import { object } from 'prop-types';

import translate from 'utils/i18n';
import Avatar from 'components/Common/Avatar';
import LinkButton from 'components/Common/LinkButton';
import TouchableIcon from 'components/Common/TouchableIcon';
import { CheckIcon, LocationIcon } from 'components/Icons';
import { openMapAndDriveTo } from 'utils/helpers';
import styles, {
  userLogoSize,
  checkSize,
  addressLines,
  addressMode
} from './styles';

const OrdersRow = ({
  order: {
    id,
    address: { name: userAddress, latitude, longitude },
    consumer: { fullName, avatar }
  }
}) => (
  <View style={styles.container}>
    <Avatar name={fullName} avatar={avatar} width={userLogoSize} height={userLogoSize} />
    <View style={styles.row}>
      <Text style={styles.name}>
        <Text style={styles.nameBold}>#{id}</Text>
        <Text style={styles.bar}> | </Text>
        {fullName}
      </Text>
      <View style={styles.addressContainer}>
        <Text
          numberOfLines={addressLines}
          ellipsizeMode={addressMode}
          style={styles.address}
        >
          {userAddress}
        </Text>
        <TouchableIcon
          onPress={() => openMapAndDriveTo(latitude, longitude)}
          containerStyles={styles.location}
          icon={<LocationIcon />}
        />
      </View>
      <LinkButton
        textStyle={styles.linkText}
        containerStyle={styles.linkTextContainer}
        text={translate('ORDERS_GROUP.details')}
        onPress={() => {}}
      />
    </View>
    <View style={styles.checkContainer}><CheckIcon width={checkSize} height={checkSize} /></View>
  </View>
);

OrdersRow.propTypes = {
  order: object.isRequired
};

export default OrdersRow;
