import React from 'react';
import { number, string } from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const CartIcon = ({ width = 20, height = 20, color }) => (
  <Svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} x="0px" y="0px" viewBox="0 0 20 20">
    <Path fill={color} d="M4.9,15.4c-1.2,0-2.3,1-2.3,2.3c0,1.2,1,2.3,2.3,2.3s2.3-1,2.3-2.3C7.2,16.4,6.1,15.4,4.9,15.4z M4.9,18.2c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5C5.3,18,5.1,18.2,4.9,18.2z M14.9,15.4c-1.2,0-2.3,1-2.3,2.3c0,1.2,1,2.3,2.3,2.3s2.3-1,2.3-2.3C17.1,16.4,16.1,15.4,14.9,15.4z M14.9,18.2c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5C15.3,18,15.1,18.2,14.9,18.2z" />
    <G>
      <Path fill={color} d="M19.4,5.7l-0.3-0.3L2.2,3.8L1.8,0.9C1.7,0.4,1.3,0,0.8,0.1C0.3,0.2,0,0.6,0,1.1l0.5,3.7c0,0,0,0,0,0.1l1.1,7.9c0.1,0.5,0.5,0.9,1,0.9h14.6c0.5,0,0.9-0.3,1-0.8l1.4-6.3l0-0.1C19.7,6.2,19.6,5.9,19.4,5.7z M16.6,11.8H3.3L2.5,5.6L17.7,7L16.6,11.8z" />
    </G>
  </Svg>
);

CartIcon.propTypes = {
  width: number,
  height: number,
  color: string
};

export default CartIcon;
