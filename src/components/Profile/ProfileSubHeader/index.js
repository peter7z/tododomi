import React from 'react';
import { Text, View } from 'react-native';
import { object } from 'prop-types';

import translate from 'utils/i18n';
import ProfileAvatar from 'components/Common/Avatar';
import styles, { size } from './styles';

const ProfileSubHeader = ({ user: { fullName, avatar } }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{translate('PROFILE.configurations')}</Text>
    <ProfileAvatar
      avatar={avatar}
      name={fullName}
      width={size}
      height={size}
    />
  </View>
);

ProfileSubHeader.propTypes = {
  user: object.isRequired
};

export default ProfileSubHeader;
