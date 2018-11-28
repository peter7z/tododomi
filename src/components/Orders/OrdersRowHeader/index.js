import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { object, bool, func } from 'prop-types';

import Avatar from 'components/Common/Avatar';
import translate from 'utils/i18n';
import { CheckIcon, CircleIcon } from 'components/Icons';
import TouchableIcon from 'components/Common/TouchableIcon';
import styles, {
  groceryLogoSize,
  checkSize,
  addressLines,
  addressMode
} from './styles';

const OrdersRowHeader = ({
  grocery: { name, logo, address, address: { name: addressName } },
  onGroupStart,
  readyToDeliver,
  startLoading,
  disabled = false,
}) => (
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
    {!disabled &&
      <View style={styles.checkContainer}>
        {startLoading
          ? <ActivityIndicator size="small" />
          : (
            <TouchableIcon onPress={onGroupStart} disabled={readyToDeliver}>
              {readyToDeliver
                ? <CheckIcon width={checkSize} height={checkSize} />
                : <CircleIcon width={checkSize} height={checkSize} />
              }
            </TouchableIcon>
          )
        }
      </View>
    }
  </View>
);

OrdersRowHeader.propTypes = {
  grocery: object.isRequired,
  readyToDeliver: bool.isRequired,
  onGroupStart: func.isRequired,
  startLoading: bool.isRequired,
  disabled: bool,
};

export default OrdersRowHeader;
