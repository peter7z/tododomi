import React from 'react';
import { number, string } from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

import { blackColor } from '../../../constants/styleConstants';

const EditIcon = ({ width = 24, height = 24, color = blackColor }) => (
  <Svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} x="0px" y="0px" viewBox="0 0 24 24">
    <G>
      <Path fill={color} d="M8.7,19.9H5c-0.5,0-0.9-0.4-0.9-0.9v-3.7c0-0.2,0.1-0.5,0.3-0.6L14.6,4.4C15,4,15.6,4,15.9,4.4l3.7,3.7C20,8.4,20,9,19.6,9.4L9.4,19.6C9.2,19.8,9,19.9,8.7,19.9z M5.9,18.1h2.5l9.4-9.4l-2.5-2.5l-9.4,9.4V18.1z" />
    </G>
  </Svg>
);

EditIcon.propTypes = {
  width: number,
  height: number,
  color: string
};

export default EditIcon;
