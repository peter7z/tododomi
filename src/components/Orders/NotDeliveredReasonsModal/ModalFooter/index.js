import React from 'react';
import { View } from 'react-native';
import { number, func, string, bool } from 'prop-types';
import Button from 'components/Common/Button';
import styles, { buttonWidth } from './styles';

const ModalFooter = ({
  height,
  onSave,
  text,
  disabledButton
}) => (
  <View style={[styles.container, { height }]}>
    <View style={styles.buttonContainer}>
      <Button
        onPress={onSave}
        title={text}
        width={buttonWidth}
        containerStyle={styles.button}
        disabled={disabledButton}
      />
    </View>
  </View>
);

ModalFooter.propTypes = {
  onSave: func.isRequired,
  height: number,
  text: string,
  disabledButton: bool
};

export default ModalFooter;
