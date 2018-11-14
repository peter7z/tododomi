import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { element, bool, func } from 'prop-types';

import styles from './styles';

const TouchableIcon = ({ icon, onPress, hasBubble = false, ...restProps }) => (
  <View style={styles.container} {...restProps}>
    <TouchableOpacity onPress={onPress}>
      { icon }
    </TouchableOpacity>
    {hasBubble && <View style={styles.bubble} />}
  </View>
);

TouchableIcon.propTypes = {
  icon: element.isRequired,
  onPress: func.isRequired,
  hasBubble: bool,
};

export default TouchableIcon;
