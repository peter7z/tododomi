import React from 'react';
import translate from 'utils/i18n';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { func } from 'prop-types';
import crossIcon from 'assets/images/cross-black.png';
import Button from 'components/Common/Button';
import { greenColor, redColor } from 'constants/styleConstants';
import styles from './styles';

const ChangeOrderStatusDialog = ({ onNotDelivered, onDelivered, onClose }) => (
  <View style={styles.container}>
    <View style={styles.dialog}>
      <View style={styles.header}>
        <Text numberOfLines={2} style={styles.headerText}>{translate('ORDERS_GROUP.dialogTitle')}</Text>
        <TouchableHighlight onPress={onClose}>
          <Image
            source={crossIcon}
          />
        </TouchableHighlight>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>{translate('ORDERS_GROUP.dialogText')}</Text>
      </View>
      <View style={styles.actions}>
        <Button
          onPress={onNotDelivered}
          title={translate('ORDERS_GROUP.dialogNotDeliveredButtonText')}
          containerStyle={styles.notDeliveredButton}
          underlayColor={redColor}
        />
        <Button
          onPress={onDelivered}
          title={translate('ORDERS_GROUP.dialogDeliveredButtonText')}
          containerStyle={styles.deliveredButton}
          underlayColor={greenColor}
        />
      </View>
    </View>
  </View>
);

ChangeOrderStatusDialog.propTypes = {
  onNotDelivered: func.isRequired,
  onDelivered: func.isRequired,
  onClose: func.isRequired,
};

export default ChangeOrderStatusDialog;
