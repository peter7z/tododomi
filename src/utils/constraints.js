import validate from 'validate.js';

import translate from 'utils/i18n';

export const login = {
  email: {
    presence: {
      message: translate('COMMON_VALIDATIONS.passwordBlankError')
    },
    email: {
      message: translate('COMMON_VALIDATIONS.emailError')
    }
  },
  password: {
    presence: {
      message: translate('COMMON_VALIDATIONS.passwordBlankError')
    }
  }
};

export const changePassword = {
  currentPassword: {
    presence: {
      message: translate('COMMON_VALIDATIONS.passwordBlankError')
    }
  },
  password: {
    presence: {
      message: translate('COMMON_VALIDATIONS.passwordBlankError')
    },
    length: {
      minimum: 8,
      message: translate('COMMON_VALIDATIONS.passwordMinimumError')
    }
  },
  passwordConfirmation: {
    presence: {
      message: translate('COMMON_VALIDATIONS.passwordBlankError'),
    },
    equality: {
      attribute: 'password',
      message: translate('COMMON_VALIDATIONS.passwordConfirmError'),
    }
  }
};

export const validations = (constraints, props = {}) =>
  data => validate(data.toJS(), constraints, props) || {};
