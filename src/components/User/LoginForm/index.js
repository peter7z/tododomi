import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text } from 'react-native';

import translate from 'utils/i18n';
import { validations, login } from 'utils/constraints';
import Input from 'components/Common/Input';
import Button from 'components/Common/Button';
import { styles, buttonMargin } from './styles';

const LoginForm = ({ handleSubmit, error }) => (
  <View style={styles.container} onSubmit={handleSubmit}>
    {error && <Text style={styles.error}>{error}</Text>}
    <Field
      name="email"
      label={translate('SIGN_IN.email')}
      component={Input}
    />
    <Field
      name="password"
      label={translate('SIGN_IN.password')}
      component={Input}
      password
    />
    <Button
      title={translate('SIGN_IN.button')}
      onPress={handleSubmit}
      marginTop={buttonMargin}
    />
  </View>
);

const { func, string } = PropTypes;

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string
};

export default reduxForm({
  form: 'login',
  validate: validations(login, { fullMessages: false })
})(LoginForm);
