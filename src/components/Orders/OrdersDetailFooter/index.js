import React from 'react';
import { View } from 'react-native';
import { number, object, func } from 'prop-types';

import { redActiveColor } from 'constants/styleConstants';
import Button from 'components/Common/Button';
import translate from 'utils/i18n';
import styles, { buttonWidth } from './styles';

const OrdersDetailFooter = ({
  height,
  setOrderStatus,
  order: { id },
}) => (
  <View style={[styles.container, { height }]}>
    <Button
      onPress={() => setOrderStatus(id, false)}
      title={translate('ORDER_ITEMS_SCREEN.noDelivered')}
      width={buttonWidth}
      containerStyle={styles.firstButton}
      underlayColor={redActiveColor}
    />
    <Button
      onPress={() => setOrderStatus(id, true)}
      title={translate('ORDER_ITEMS_SCREEN.delivered')}
      width={buttonWidth}
      containerStyle={styles.secondButton}
    />
  </View>
);

OrdersDetailFooter.propTypes = {
  order: object.isRequired,
  setOrderStatus: func.isRequired,
  height: number,
};

export default OrdersDetailFooter;
