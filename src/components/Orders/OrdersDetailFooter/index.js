import React from 'react';
import { View } from 'react-native';
import { number, func } from 'prop-types';

import { redActiveColor } from 'constants/styleConstants';
import Button from 'components/Common/Button';
import translate from 'utils/i18n';
import styles, { buttonWidth } from './styles';

const OrdersDetailFooter = ({
  height,
  setOrderStatus,
}) => (
  <View style={[styles.container, { height }]}>
    <View style={styles.buttonsContainer}>
      <Button
        onPress={() => setOrderStatus(false)}
        title={translate('ORDER_ITEMS_SCREEN.noDelivered')}
        width={buttonWidth}
        containerStyle={styles.firstButton}
        underlayColor={redActiveColor}
      />
      <Button
        onPress={() => setOrderStatus(true)}
        title={translate('ORDER_ITEMS_SCREEN.delivered')}
        width={buttonWidth}
        containerStyle={styles.secondButton}
      />
    </View>
  </View>
);

OrdersDetailFooter.propTypes = {
  setOrderStatus: func.isRequired,
  height: number,
};

export default OrdersDetailFooter;
