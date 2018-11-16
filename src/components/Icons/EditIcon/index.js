import React from 'react';
import { number, string } from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

import { secondaryColor } from '../../../constants/styleConstants';

const EditIcon = ({ width = 24, height = 24, color = secondaryColor }) => (
  <Svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} x="0px" y="0px" viewBox="0 0 24 24">
    <G fill="none" stroke={color}>
      <Path d="M15.267 5L19 8.733 8.733 19H5v-3.733z" />
    </G>
  </Svg>
);

EditIcon.propTypes = {
  width: number,
  height: number,
  color: string
};

export default EditIcon;
