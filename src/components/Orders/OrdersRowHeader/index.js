import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { object, bool, func, number } from 'prop-types';

import Avatar from 'components/Common/Avatar';
import translate from 'utils/i18n';
import { CheckIcon, CircleIcon, BoxIcon } from 'components/Icons';
import TouchableIcon from 'components/Common/TouchableIcon';
import { primaryActiveColor } from 'constants/styleConstants';
import styles, {
  groceryLogoSize,
  checkSize,
  addressLines,
  addressMode
} from './styles';

const OrdersRowHeader = ({
  bags,
  grocery: { name, logo, address, address: { name: addressName } },
  onGroupStart,
  readyToDeliver,
  startLoading,
  disabled = false,
}) => (
  <View style={styles.container}>
    <View style={styles.leftContainer} >
      <Avatar
        avatar={logo}
        width={groceryLogoSize}
        height={groceryLogoSize}
        style={readyToDeliver && { borderWidth: 2, borderColor: primaryActiveColor }}
      />
      <View style={[styles.line, readyToDeliver && { backgroundColor: primaryActiveColor }]} />
    </View>
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
      <View style={styles.bags}>
        <BoxIcon />
        <Text>
          {` ${bags} ${translate('ORDERS_GROUP.bags')}${(bags == 1) ? '' : 's'}`}
        </Text>
      </View>
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
  bags: number.isRequired,
  grocery: object.isRequired,
  readyToDeliver: bool.isRequired,
  onGroupStart: func.isRequired,
  startLoading: bool.isRequired,
  disabled: bool,
};

export default OrdersRowHeader;
