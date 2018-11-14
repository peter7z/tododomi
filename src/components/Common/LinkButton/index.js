import React from 'react';
import { TouchableOpacity, Text, ViewPropTypes } from 'react-native';
import { string, func } from 'prop-types';

import styles from './styles';

const {
  linkContainer,
  linkText,
} = styles;

const LinkButton = ({ text, onPress, containerStyle, textStyle }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    style={[linkContainer, containerStyle]}
  >
    <Text style={[linkText, textStyle]}>
      {text}
    </Text>
  </TouchableOpacity>
);

LinkButton.propTypes = {
  text: string.isRequired,
  onPress: func.isRequired,
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
};

export default LinkButton;
