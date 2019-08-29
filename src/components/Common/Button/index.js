import React from 'react';
import { TouchableHighlight, Text, ViewPropTypes, ActivityIndicator } from 'react-native';
import { string, func, bool, number } from 'prop-types';

import { lightGreyColor, primaryActiveColor, whiteColor } from 'constants/styleConstants';
import stylesProps from './styles';

const Button = ({
  title,
  onPress,
  transparent = false,
  width,
  marginBottom,
  marginTop,
  marginHorizontal,
  containerStyle,
  underlayColor,
  disabled = false,
  loading = false,
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
      underlayColor={underlayColor || (transparent ? lightGreyColor : primaryActiveColor)}
      style={[buttonContainer, transparent && transparentStyle, containerStyle]}
    >
      {loading ?
        <ActivityIndicator size="small" color={whiteColor} />
        :
        <Text style={[buttonText, transparent && transparentText]}>
          {title}
        </Text>
      }
    </TouchableHighlight>
  );
};

Button.propTypes = {
  title: string.isRequired,
  onPress: func.isRequired,
  containerStyle: ViewPropTypes.style,
  transparent: bool,
  disabled: bool,
  width: string,
  marginBottom: number,
  marginTop: number,
  marginHorizontal: number,
  underlayColor: string,
  loading: bool,
};

export default Button;
