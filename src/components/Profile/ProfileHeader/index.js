import React from 'react';
import { View, Image } from 'react-native';
import { func } from 'prop-types';

import CrossIcon from 'components/Icons/CrossIcon';
import TouchableIcon from 'components/Common/TouchableIcon';
import logo from 'assets/images/logo-only.png';
import styles from './styles';

const ProfileHeader = ({ closeModal }) => (
  <View style={styles.container}>
    <TouchableIcon onPress={closeModal} icon={<CrossIcon />} />
    <Image source={logo} />
    <View />
  </View>
);

ProfileHeader.propTypes = {
  closeModal: func.isRequired
};

export default ProfileHeader;
