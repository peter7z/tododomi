import React from 'react';
import { Text, TouchableOpacity, Image, ViewPropTypes } from 'react-native';
import { string, func, number, object } from 'prop-types';

import { capitalize } from 'utils/helpers';
import styles from './styles';

const Avatar = ({ name, avatar, onPress, width = 32, height = 32, style }) => {
  const roundedStyle = { width, height, borderRadius: width / 2 };
  const roundedStyleBig = { width: width + 3, height: height + 3, borderRadius: (width + 3) / 2 };

  return (
    <TouchableOpacity
      disabled={onPress === undefined}
      onPress={onPress}
      style={[styles.container, roundedStyleBig, style]}
    >
      {
        avatar && avatar.bigSize && avatar.bigSize.url
          ? <Image source={{ uri: avatar.bigSize.url }} style={roundedStyle} />
          : <Text style={styles.userInitial}>{name ? capitalize(name[0]) : ''}</Text>
      }
    </TouchableOpacity>
  );
};

Avatar.propTypes = {
  name: string,
  avatar: object,
  onPress: func,
  width: number,
  height: number,
  style: ViewPropTypes.style
};

export default Avatar;
