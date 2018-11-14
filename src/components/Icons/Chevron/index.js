import React from 'react';
import { number, string, oneOf } from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

import { secondaryColor } from 'constants/styleConstants';

export const ChevronDirections = {
  UP: '-45',
  RIGHT: '0',
  DOWN: '45',
  LEFT: '90'
};

const Chevron = ({ width = 24, height = 24, direction = ChevronDirections.DOWN, color = secondaryColor }) => {
  const center = width / 2;

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} x="0px" y="0px" viewBox="0 0 24 24">
      <Path fill="none" d="M0,24V0h24v24H0z" transform={`rotate(${direction}, ${center}, ${center})`} />
      <G fill="none" transform={`rotate(${direction}, ${center}, ${center})`}>
        <Path fill={color} d="M9,18.9c-0.2,0-0.5-0.1-0.6-0.3c-0.4-0.4-0.4-0.9,0-1.3l5.4-5.4L8.4,6.6C8,6.3,8,5.7,8.4,5.4C8.7,5,9.3,5,9.6,5.4l6,6c0.4,0.4,0.4,0.9,0,1.3l-6,6C9.5,18.8,9.2,18.9,9,18.9z" transform={`rotate(${direction}, ${center}, ${center})`} />
      </G>
    </Svg>
  );
};

Chevron.propTypes = {
  width: number,
  height: number,
  direction: oneOf([
    ChevronDirections.RIGHT,
    ChevronDirections.LEFT,
    ChevronDirections.UP,
    ChevronDirections.DOWN
  ]),
  color: string
};

export default Chevron;
