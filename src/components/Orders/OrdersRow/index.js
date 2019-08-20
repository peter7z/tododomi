import React from 'react';
import { View, Text, ActivityIndicator, UIManager } from 'react-native';
import { object, bool, func } from 'prop-types';

import translate from 'utils/i18n';
import Avatar from 'components/Common/Avatar';
import LinkButton from 'components/Common/LinkButton';
import TouchableIcon from 'components/Common/TouchableIcon';
import { CheckIcon, CircleCrossIcon, LocationIcon, CircleIcon } from 'components/Icons';
import { openMapAndDriveTo } from 'utils/helpers';
import { primaryActiveColor, redColor } from 'constants/styleConstants';

import styles, {
  userLogoSize,
  checkSize,
  addressLines,
  addressMode
} from './styles';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const OrdersRow = ({
  order: {
    id,
    address: { name: userAddress, latitude, longitude },
    consumer: { fullName, avatar },
    delivered,
  },
  onChangeOrderStatus,
  onEnterOrder,
  loading,
  last,
  disabled = false,
}) => (
  <View style={styles.container}>
    <View style={styles.leftContainer}>
      <Avatar
        style={[
          (delivered != null) && { borderWidth: 2 },
          { borderColor: delivered ? primaryActiveColor : redColor }
        ]}
        name={fullName}
        avatar={avatar}
        width={userLogoSize}
        height={userLogoSize}
      />
      {
        !last &&
          <View
            style={[
              styles.line,
              (delivered != null) && { backgroundColor: delivered ? primaryActiveColor : redColor }
            ]}
          />
      }
    </View>
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
        onPress={onEnterOrder}
      />
    </View>
    {!disabled &&
      <View style={styles.checkContainer}>
        {loading
          ? <ActivityIndicator size="small" />
          : (
            <TouchableIcon onPress={() => delivered === null && onChangeOrderStatus(id, !delivered)}>
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
  onEnterOrder: func.isRequired,
  loading: bool.isRequired,
  disabled: bool,
  last: bool,
};

export default OrdersRow;
