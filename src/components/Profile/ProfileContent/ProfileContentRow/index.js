import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { string, element, func } from 'prop-types';

import Chevron, { ChevronDirections } from 'components/Icons/Chevron';
import styles from './styles';

const ProfileContentRow = ({ icon, text, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.container}
  >
    <View style={styles.leftContainer}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </View>
    <Chevron direction={ChevronDirections.RIGHT} />
  </TouchableOpacity>
);

ProfileContentRow.propTypes = {
  icon: element.isRequired,
  text: string.isRequired,
  onPress: func.isRequired,
};

export default ProfileContentRow;
