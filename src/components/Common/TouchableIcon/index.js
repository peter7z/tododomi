import React from 'react';
import { TouchableOpacity, View, ViewPropTypes } from 'react-native';
import { element, bool, func } from 'prop-types';

import styles from './styles';

const TouchableIcon = ({ icon, onPress, containerStyles, hasBubble = false, ...restProps }) => (
  <View style={[styles.container, containerStyles]} {...restProps}>
    <TouchableOpacity onPress={onPress}>
      { icon }
    </TouchableOpacity>
    {hasBubble && <View style={styles.bubble} />}
  </View>
);

TouchableIcon.propTypes = {
  icon: element.isRequired,
  onPress: func.isRequired,
  containerStyles: ViewPropTypes.style,
  hasBubble: bool,
};

export default TouchableIcon;
