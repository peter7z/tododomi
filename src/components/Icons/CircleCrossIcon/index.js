import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { number, string } from 'prop-types';

import { redColor, whiteColor } from 'constants/styleConstants';
import Ellipse from 'react-native-svg/elements/Ellipse';

const CircleCrossIcon = ({ width = 29, height = 29, color = redColor, style }) => (
  <View style={style}>
    <Svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} x="0px" y="0px" viewBox="0 0 29 29">
      <Ellipse fill={color} cx="14.5" cy="14.5" rx="14.5" ry="14.5" />
      <G>
        <Path fill={whiteColor} d="M22.7,22.4c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0-0.5-0.1-0.7-0.3l-6.4-6.2l-6.2,6.4C8.5,22.9,8.2,23,7.9,23c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1.1,0-1.5l6.2-6.4L7,8.7c-0.4-0.4-0.4-1.1,0-1.5c0.4-0.4,1.1-0.4,1.5,0l6.4,6.2L20.9,7c0.4-0.4,1.1-0.4,1.5,0c0.4,0.4,0.4,1.1,0,1.5l-6.2,6.4l6.4,6.1C23.1,21.3,23.1,22,22.7,22.4z" />
      </G>
    </Svg>
  </View>
);

CircleCrossIcon.propTypes = {
  width: number,
  height: number,
  color: string,
  style: ViewPropTypes.style
};

export default CircleCrossIcon;
