import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { ImageBackground, KeyboardAvoidingView, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { getNotificationPlayerId } from 'utils/notifications';
import translate from 'utils/i18n';
import LoginForm from 'components/User/LoginForm';
import bg from 'assets/images/bg.png';
import logo from 'assets/images/logo.png';
import { login } from 'actions/userActions';
import styles from './styles';

class LoginScreen extends PureComponent {
  login = ({ email, password }) => {
    const { login } = this.props;
    const notificationPlayerId = getNotificationPlayerId();
    const deliverer = {
      email,
      password,
      pushToken: notificationPlayerId,
    };
    login(deliverer);
  };

  render() {
    return (
      <ImageBackground
        resizeMode={'cover'}
        style={styles.bgImage}
        source={bg}
      >
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.app}>{translate('SIGN_IN.app')}</Text>
          <LoginForm onSubmit={user => this.login(user.toJS())} />
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

LoginScreen.propTypes = {
  login: func.isRequired
};

LoginScreen.navigatorStyle = {
  navBarHidden: true
};

const mapDispatch = ({
  login,
});

export default connect(null, mapDispatch)(LoginScreen);
