import React from 'react';
import { ScrollView } from 'react-native';
import { func } from 'prop-types';

import translate from 'utils/i18n';
import { UserIcon, EditIcon } from 'components/Icons';
import ProfileContentRow from './ProfileContentRow';
import styles from './styles';

const ProfileContent = ({ onLogout, onChangePassword }) => (
  <ScrollView style={styles.container}>
    <ProfileContentRow
      icon={<EditIcon />}
      onPress={onChangePassword}
      text={translate('PROFILE.changeRow')}
    />
    <ProfileContentRow
      icon={<UserIcon />}
      onPress={onLogout}
      text={translate('PROFILE.logoutRow')}
    />
  </ScrollView>
);

ProfileContent.propTypes = {
  onLogout: func.isRequired,
  onChangePassword: func.isRequired,
};

export default ProfileContent;
