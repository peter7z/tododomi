import React from 'react';
import { TouchableOpacity, View, ViewPropTypes } from 'react-native';
import { element, bool, func, node } from 'prop-types';

import styles from './styles';

const TouchableIcon = ({
  icon,
  onPress,
  containerStyles,
  children,
  hasBubble = false,
  disabled = false,
  ...restProps
}) => (
  <View style={[styles.container, containerStyles]} {...restProps}>
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      { icon || children }
    </TouchableOpacity>
    {hasBubble && <View style={styles.bubble} />}
  </View>
);

TouchableIcon.propTypes = {
  onPress: func.isRequired,
  containerStyles: ViewPropTypes.style,
  children: node,
  icon: element,
  hasBubble: bool,
  disabled: bool,
};

export default TouchableIcon;
