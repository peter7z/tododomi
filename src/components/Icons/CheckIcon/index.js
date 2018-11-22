import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import Svg, { G, Path, Ellipse } from 'react-native-svg';
import { number, string } from 'prop-types';

import { greenColor, whiteColor } from 'constants/styleConstants';

const CheckIcon = ({ width = 29, height = 29, color = greenColor, style }) => (
  <View style={style}>
    <Svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} x="0px" y="0px" viewBox="0 0 29 29">
      <Ellipse fill={color} cx="14.5" cy="14.5" rx="14.5" ry="14.5" />
      <G>
        <Path fill={whiteColor} d="M10.7,20.6c-0.3,0-0.5-0.1-0.7-0.3l-3.6-3.6c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l2.9,2.9l9.6-9.8c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L11.4,20.4C11.2,20.5,11,20.6,10.7,20.6z" />
      </G>
    </Svg>
  </View>
);

CheckIcon.propTypes = {
  width: number,
  height: number,
  color: string,
  style: ViewPropTypes.style
};

export default CheckIcon;
