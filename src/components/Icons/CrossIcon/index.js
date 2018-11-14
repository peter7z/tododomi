import React from 'react';
import { number, string } from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

const CrossIcon = ({ width = 14, height = 14, color }) => (
  <Svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} x="0px" y="0px" viewBox="0 0 14 14">
    <G>
      <Path
        fill={color}
        d="M13.4,13.2c-0.2,0.2-0.4,0.3-0.7,0.3c-0.2,0-0.5-0.1-0.6-0.2L7,8.3l-4.9,5.1c-0.2,0.2-0.4,0.3-0.7,0.3c-0.2,0-0.5-0.1-0.6-0.3c-0.4-0.3-0.4-0.9,0-1.3L5.7,7L0.6,2.1c-0.4-0.3-0.4-0.9,0-1.3c0.3-0.4,0.9-0.4,1.3,0L7,5.7l4.9-5.1c0.4-0.4,0.9-0.4,1.3,0c0.4,0.3,0.4,0.9,0,1.3L8.3,7l5.1,4.9C13.7,12.3,13.8,12.8,13.4,13.2z"
      />
    </G>
  </Svg>
);

CrossIcon.propTypes = {
  width: number,
  height: number,
  color: string
};

export default CrossIcon;
