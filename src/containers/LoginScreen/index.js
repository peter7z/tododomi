import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, KeyboardAvoidingView, Image, Text } from 'react-native';
import { connect } from 'react-redux';

import translate from 'utils/i18n';
import LoginForm from 'components/User/LoginForm';
import bg from 'assets/images/bg.png';
import logo from 'assets/images/logo.png';
import { login } from 'actions/userActions';
import styles from './styles';

const LoginScreen = ({ login }) => (
  <ImageBackground
    resizeMode={'cover'}
    style={styles.bgImage}
    source={bg}
  >
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.app}>{translate('SIGN_IN.app')}</Text>
      <LoginForm onSubmit={login} />
    </KeyboardAvoidingView>
  </ImageBackground>
);

const { func } = PropTypes;

LoginScreen.propTypes = {
  login: func.isRequired
};

LoginScreen.navigatorStyle = {
  navBarHidden: true
};

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user.toJS()))
});

export default connect(null, mapDispatch)(LoginScreen);
