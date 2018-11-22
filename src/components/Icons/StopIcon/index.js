import React from 'react';
import { number, string } from 'prop-types';
import Svg, { Path } from 'react-native-svg';

import { greyColor } from 'constants/styleConstants';

const StopIcon = ({ width = 20, height = 20, color = greyColor }) => (
  <Svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} x="0px" y="0px" viewBox="0 0 24 24">
    <Path fill={color} d="M22.1,7.7l-3.5-3.8c-0.1-0.1-0.2-0.2-0.3-0.2c-0.1,0-0.2-0.1-0.4-0.1h-5v-1c0-0.2-0.1-0.4-0.3-0.6c-0.3-0.3-0.9-0.3-1.2,0c-0.2,0.2-0.2,0.4-0.2,0.6v1H4.6C4.4,3.6,4.2,3.7,4,3.9C3.8,4.1,3.8,4.3,3.8,4.5V12c0,0.2,0.1,0.4,0.3,0.6c0.2,0.2,0.4,0.3,0.6,0.3h6.7v8.5c0,0.2,0.1,0.4,0.3,0.6s0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2c0.2-0.2,0.3-0.4,0.3-0.6v-8.5h5c0.1,0,0.2,0,0.4-0.1c0.1,0,0.2-0.1,0.3-0.2l3.5-3.7c0.2-0.2,0.2-0.4,0.2-0.6S22.3,7.8,22.1,7.7z M17.6,11.2H5.5V5.4h12.1l2.7,2.9L17.6,11.2z" />
  </Svg>
);

StopIcon.propTypes = {
  width: number,
  height: number,
  color: string
};

export default StopIcon;
