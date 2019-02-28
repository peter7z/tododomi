import React from 'react';
import { string } from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

import { primaryActiveColor } from 'constants/styleConstants';

const BoxIcon = ({ color = primaryActiveColor }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <G fill="none" fill-rule="evenodd" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8">
      <Path d="M12.742 3.208l6.666 3.334c.567.281.925.859.925 1.491v7.942c0 .632-.358 1.21-.925 1.492L12.742 20.8a1.667 1.667 0 0 1-1.492 0l-6.667-3.333a1.667 1.667 0 0 1-.916-1.5V8.033c0-.632.358-1.21.925-1.491l6.666-3.334a1.667 1.667 0 0 1 1.484 0z" />
      <Path d="M3.933 7.133L12 11.167l8.067-4.034M12 20.967v-9.8M7.833 4.917l8.334 4.166" />
    </G>
  </Svg>
);

BoxIcon.propTypes = {
  color: string
};

export default BoxIcon;
