import React from 'react';
import { number, string } from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

import { secondaryColor } from 'constants/styleConstants';

const DirectionIcon = ({ width = 24, height = 24, color = secondaryColor }) => (
  <Svg version="1.1" width={width} height={height} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
    <G>
      <Path fill={color} d="M12,13.7c-3.2,0-5.8-2.6-5.8-5.8S8.8,2.1,12,2.1s5.8,2.6,5.8,5.8S15.2,13.7,12,13.7z M12,3.9c-2.2,0-4,1.8-4,4s1.8,4,4,4c2.2,0,4-1.8,4-4S14.2,3.9,12,3.9z" />
    </G>
    <G>
      <Path fill={color} d="M21,21.9c-0.5,0-0.9-0.4-0.9-0.9v-2c0-0.6-0.1-0.7-0.1-0.8c-0.1-0.1-0.1-0.2-0.2-0.2c-0.1-0.1-0.2-0.1-0.8-0.1H5.1c-0.6,0-0.7,0.1-0.8,0.1C4.2,18,4.1,18.1,4,18.2C4,18.3,3.9,18.4,3.9,19v2c0,0.5-0.4,0.9-0.9,0.9S2.1,21.5,2.1,21v-2c0-0.8,0.1-1.2,0.3-1.7c0.2-0.4,0.6-0.8,1-1C3.9,16.1,4.3,16,5.1,16h13.8c0.8,0,1.2,0.1,1.7,0.3c0.4,0.2,0.8,0.6,1,1c0.2,0.4,0.3,0.9,0.3,1.7v2C21.9,21.5,21.5,21.9,21,21.9z" />
    </G>
  </Svg>
);

DirectionIcon.propTypes = {
  width: number,
  height: number,
  color: string
};

export default DirectionIcon;
