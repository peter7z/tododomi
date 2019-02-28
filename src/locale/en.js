export default {
  SIGN_IN: {
    title: 'Sign in',
    email: 'Email',
    password: 'Password',
    button: 'Sign in',
    app: 'Delivery'
  },

  MAIN_SCREEN: {
    logout: 'Sign out'
  },

  PROFILE: {
    configurations: 'My configurations',
    logoutRow: 'Logout',
    changeRow: 'Change password'
  },

  CHANGE_PASSWORD: {
    oldPassword: 'Current password',
    newPassword: 'New password',
    confirmPassword: 'Confirm new password',
    button: 'Change password',
    title: 'Change password'
  },

  COMMON_VALIDATIONS: {
    passwordBlankError: 'You must enter a password',
    passwordConfirmError: 'The confirmation doesn\'t match',
    passwordMinimumError: 'The password must have at least 8 characters',
    emailBlankError: 'You must enter an email',
    emailInvalidError: 'You must enter a valid email'
  },

  DASHBOARD: {
    title: 'Orders',
    completed: 'COMPLETED',
    next: 'UPCOMING',
  },

  ORDERS: {
    active: 'Active',
    today: 'Today',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow',
    emptyOrdersTitle: 'You don\'t have orders',
    emptyOrdersDescription: 'Come again and refresh in 5 minutes',
    emptyOrdersThanks: 'Thank you!'
  },

  ORDERS_GROUP: {
    bags: 'Bag',
    store: 'Store',
    details: 'Details',
    stops: 'Stops',
    modalTitle: 'Order not delivered because:',
    modalPlaceholder: 'Write briefly what were the inconveniences that caused the order was not delivered, thank you.',
    dialogTitle: 'Did you deliver the order?',
    dialogText: 'Check if you have completed the delivery or not, and if it is the last option, briefly describe the reason.',
    dialogNotDeliveredButtonText: 'Not delivered',
    dialogDeliveredButtonText: 'Delivered',
    confirmNotDeliveredButton: 'Confirm Undelivered Order'
  },

  ORDER_ITEMS_SCREEN: {
    details: 'Details',
    title: 'Order details',
    noDelivered: 'Not delivered',
    delivered: 'Delivered'
  }
};
