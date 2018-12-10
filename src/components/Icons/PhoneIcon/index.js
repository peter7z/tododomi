import React from 'react';
import { number, string } from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { secondaryButtonTextColor } from 'constants/styleConstants';

const LocationIcon = ({ width = 40, height = 49, color = secondaryButtonTextColor }) => (
  <Svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} x="0px" y="0px" viewBox="0 0 24 24">
    <Path
      fill={color} d="M20.3,4.5L20.3,4.5l0,3.7c0,0.2-0.1,0.4-0.2,0.5c-0.1,0.1-0.2,0.1-0.4,0.2h-0.3c-0.2,0-0.4-0.1-0.5-0.2
    c-0.1-0.1-0.2-0.3-0.2-0.4l0-1.7l-3.8,3.8c-0.1,0.1-0.3,0.2-0.5,0.2c0,0,0,0-0.1,0c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.6
    c0-0.2,0.1-0.4,0.3-0.6l3.8-3.7h-1.6c-0.1,0-0.3,0-0.5-0.2c-0.2-0.1-0.2-0.3-0.2-0.5V4.4c0-0.2,0.1-0.3,0.2-0.5
    c0.1-0.1,0.3-0.2,0.5-0.2c0,0,0,0,0,0l3.6,0l0.2,0c0.2,0,0.4,0.1,0.5,0.2C20.2,4,20.2,4,20.2,4.1c0,0.1,0,0.2,0,0.2L20.3,4.5z"
    />
    <Path
      fill={color} d="M20.3,16.7c0-0.4-0.2-0.7-0.5-0.8h0c-0.1,0-0.3-0.2-0.6-0.4l-1-0.7c-0.5-0.4-1.1-0.7-1.7-1.1
    c-0.1,0-0.2-0.1-0.3-0.1c-0.3-0.1-0.5-0.1-0.8,0c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.4,0.2-0.7,0.4c-0.2,0.1-0.4,0.2-0.6,0.3
    c-0.2-0.1-0.4-0.3-0.7-0.5c-0.5-0.4-1-0.9-1.5-1.4c-0.6-0.6-1.1-1.1-1.4-1.5c-0.2-0.3-0.4-0.5-0.5-0.7c0.1-0.2,0.2-0.4,0.3-0.6
    c0.2-0.3,0.3-0.5,0.4-0.7c0.1-0.3,0.2-0.6,0.2-0.8c0-0.3,0-0.5-0.2-0.8c0-0.1-0.2-0.3-0.4-0.6l-0.7-1C9,5.4,8.8,5.1,8.6,4.8L8.2,4.2
    C8.1,4,7.9,3.9,7.7,3.8C7.4,3.7,7,3.7,6.6,3.8C6.5,3.8,6.3,3.9,6.1,4c0,0-0.2,0.1-0.4,0.3C5.5,4.5,5.2,4.7,4.9,5
    C4.6,5.3,4.4,5.6,4.1,5.9C3.8,6.3,3.7,6.6,3.7,7c0,0.7,0.2,1.5,0.5,2.2c0.3,0.8,0.7,1.5,1.2,2.2c0.5,0.7,1,1.4,1.6,2.1
    c0.5,0.6,1.1,1.2,1.7,1.8c0.6,0.6,1.2,1.2,1.8,1.7c0.7,0.6,1.4,1.1,2.1,1.6c0.7,0.5,1.4,0.9,2.2,1.2c0.8,0.3,1.5,0.5,2.3,0.5
    c0.3,0,0.6-0.2,1-0.4c0.3-0.2,0.6-0.5,0.9-0.8c0.3-0.3,0.5-0.6,0.7-0.8l0.3-0.4C20.3,17.5,20.4,17.1,20.3,16.7z M18.3,17.4
    c-0.2,0.2-0.4,0.5-0.7,0.7c-0.4,0.4-0.6,0.5-0.7,0.6c-0.4,0-0.9-0.2-1.4-0.3c-0.5-0.2-1.1-0.5-1.7-0.9c-0.7-0.4-1.3-0.9-1.9-1.4
    c-0.7-0.5-1.4-1.2-2.1-1.9c-0.7-0.7-1.4-1.4-1.9-2.1s-1-1.3-1.4-1.9C6.1,9.5,5.8,8.9,5.6,8.4C5.4,7.9,5.3,7.4,5.3,7
    c0.1-0.1,0.2-0.3,0.6-0.7C6.2,6,6.6,5.7,7,5.3c0.1,0.1,0.2,0.2,0.3,0.4c0.2,0.3,0.4,0.6,0.6,1c0.2,0.3,0.4,0.6,0.6,1
    C8.7,7.8,8.8,8,8.9,8.2c0,0,0,0.1,0,0.1c0,0.1-0.1,0.2-0.3,0.5C8.5,9,8.3,9.3,8.1,9.7l-0.4,0.7l0.5,0.7c0.2,0.3,0.5,0.6,0.7,0.9
    c0.5,0.5,1,1.1,1.5,1.6c0.7,0.7,1.2,1.1,1.6,1.5c0.3,0.2,0.6,0.5,0.9,0.7l0.7,0.5l0.7-0.4c0.5-0.3,0.9-0.5,1.4-0.8c0,0,0.1,0,0.1,0
    l1.5,1c0.3,0.2,0.7,0.4,1,0.6c0.1,0.1,0.3,0.2,0.4,0.3L18.3,17.4L18.3,17.4z"
    />
  </Svg>
);

LocationIcon.propTypes = {
  width: number,
  height: number,
  color: string
};

export default LocationIcon;
