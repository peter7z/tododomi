import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';

import translate from 'utils/i18n';
import ProfileHeader from 'components/Profile/ProfileHeader';
import ChangePasswordForm from 'components/User/ChangePasswordForm';
import { changePassword } from 'actions/userActions';
import styles from './styles';

class ChangePasswordScreen extends React.Component {
  constructor() {
    super();

    this.onBack = this.onBack.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onBack() {
    this.props.navigator.dismissModal();
  }

  onChangePassword(passwordData) {
    return this.props.changePassword(passwordData).then(() => {
      this.onBack();
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ProfileHeader closeModal={this.onBack} />
        <View style={styles.content}>
          <Text style={styles.title}>{translate('CHANGE_PASSWORD.title')}</Text>
          <ChangePasswordForm onSubmit={this.onChangePassword} />
        </View>
      </View>
    );
  }
}

ChangePasswordScreen.navigatorStyle = {
  navBarHidden: true
};

ChangePasswordScreen.propTypes = {
  navigator: object.isRequired,
  changePassword: func.isRequired,
};

const mapDispatch = dispatch => ({
  changePassword: passwordData => dispatch(changePassword(passwordData.toJS()))
});

export default connect(null, mapDispatch)(ChangePasswordScreen);
