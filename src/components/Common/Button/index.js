import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { string, func, bool, number } from 'prop-types';

import { lightGreyColor, primaryActiveColor } from 'constants/styleConstants';
import stylesProps from './styles';

const Button = ({
  title,
  onPress,
  transparent = false,
  width,
  marginBottom,
  marginTop,
  marginHorizontal,
  disabled = false
}) => {
  const styles = stylesProps(width, marginBottom, marginTop, marginHorizontal);
  const {
    buttonContainer,
    buttonText,
    transparentStyle,
    transparentText
  } = styles;

  return (
    <TouchableHighlight
      onPress={disabled ? null : onPress}
      activeOpacity={1}
      underlayColor={transparent ? lightGreyColor : primaryActiveColor}
      style={[buttonContainer, transparent && transparentStyle]}
    >
      <Text style={[buttonText, transparent && transparentText]}>
        {title}
      </Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  title: string.isRequired,
  onPress: func.isRequired,
  transparent: bool,
  disabled: bool,
  width: string,
  marginBottom: number,
  marginTop: number,
  marginHorizontal: number
};

export default Button;