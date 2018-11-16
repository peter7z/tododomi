import React from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form/immutable';
import { func, string } from 'prop-types';

import Button from 'components/Common/Button';
import translate from 'utils/i18n';
import { validations, changePassword } from 'utils/constraints';
import Input from 'components/Common/Input';

import { styles, buttonMargin } from './styles';

const ChangePasswordForm = ({ handleSubmit, error, onSubmit }) => (
  <View
    title={translate('SIGN_UP.title')}
    onSubmit={handleSubmit(onSubmit)}
    buttonText={translate('SIGN_UP.createAccountButton')}
  >
    {error && <Text style={styles.error}>{error}</Text>}
    <Field
      name="currentPassword"
      label={translate('CHANGE_PASSWORD.oldPassword')}
      component={Input}
      password
    />
    <Field
      name="password"
      label={translate('CHANGE_PASSWORD.newPassword')}
      component={Input}
      password
    />
    <Field
      name="passwordConfirmation"
      label={translate('CHANGE_PASSWORD.confirmPassword')}
      component={Input}
      password
    />
    <Button
      title={translate('CHANGE_PASSWORD.button')}
      onPress={handleSubmit}
      marginTop={buttonMargin}
    />
  </View>
);

ChangePasswordForm.propTypes = {
  handleSubmit: func.isRequired,
  onSubmit: func.isRequired,
  error: string
};

export default reduxForm({
  form: 'changePassword',
  validate: validations(changePassword, { fullMessages: false })
})(ChangePasswordForm);
