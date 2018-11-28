import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { number, string } from 'prop-types';

import { greyBorderColor } from 'constants/styleConstants';

const CircleIcon = ({ width = 29, height = 29, color = greyBorderColor }) => (
  <Svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} x="0px" y="0px" viewBox="0 0 27 27">
    <G>
      <Path fill={color} d="M13.5,0C6.1,0,0,6.1,0,13.5S6.1,27,13.5,27S27,20.9,27,13.5S20.9,0,13.5,0z M13.5,25.2C7,25.2,1.8,20,1.8,13.5S7,1.8,13.5,1.8S25.2,7,25.2,13.5S20,25.2,13.5,25.2z" />
    </G>
  </Svg>
);

CircleIcon.propTypes = {
  width: number,
  height: number,
  color: string
};

export default CircleIcon;
