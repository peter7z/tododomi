import React from 'react';
import { string, number } from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

import { whiteColor } from 'constants/styleConstants';

const ClosedLock = ({ color = whiteColor, height = 20, width = 14, ...props }) => (
  <Svg width={width} height={height} {...props}>
    <G fill={color} fillRule="evenodd" opacity={0.8}>
      <Path d="M2 18v-7h10l.001 7H2zm10-9H4V5c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2V5c0-2.757-2.243-5-5-5S2 2.243 2 5v4c-1.103 0-2 .896-2 2v7c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-7c0-1.104-.897-2-2-2z" />
      <Path d="M7 13a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 7 13" />
    </G>
  </Svg>
);

ClosedLock.propTypes = {
  color: string,
  height: number,
  width: number,
};

export default ClosedLock;
