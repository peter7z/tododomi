import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { object, bool, func } from 'prop-types';

import translate from 'utils/i18n';
import Avatar from 'components/Common/Avatar';
import LinkButton from 'components/Common/LinkButton';
import TouchableIcon from 'components/Common/TouchableIcon';
import { CheckIcon, CircleCrossIcon, LocationIcon, CircleIcon } from 'components/Icons';
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
    consumer: { fullName, avatar },
    delivered,
  },
  onChangeOrderStatus,
  statusLoading,
  disabled = false,
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
    {!disabled &&
      <View style={styles.checkContainer}>
        {statusLoading
          ? <ActivityIndicator size="small" />
          : (
            <TouchableIcon onPress={() => onChangeOrderStatus(id, !delivered)}>
              {delivered === null && <CircleIcon width={checkSize} height={checkSize} />}
              {delivered !== null && (
                delivered
                  ? <CheckIcon width={checkSize} height={checkSize} />
                  : <CircleCrossIcon width={checkSize} height={checkSize} />
              )}
            </TouchableIcon>
          )
        }
      </View>
    }
  </View>
);

OrdersRow.propTypes = {
  order: object.isRequired,
  onChangeOrderStatus: func.isRequired,
  statusLoading: bool.isRequired,
  disabled: bool,
};

export default OrdersRow;
