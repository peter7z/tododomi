import React from 'react';
import { View } from 'react-native';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';

import { logout } from 'actions/userActions';
import ProfileHeader from 'components/Profile/ProfileHeader';
import ProfileSubHeader from 'components/Profile/ProfileSubHeader';
import ProfileContent from 'components/Profile/ProfileContent';
import { CHANGE_PASSWORD_SCREEN } from '../../screens';
import styles from './styles';

class ProfileScreen extends React.Component {
  constructor() {
    super();

    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangePassword() {
    this.props.navigator.showModal({ screen: CHANGE_PASSWORD_SCREEN });
  }

  render() {
    const { navigator, user, logout } = this.props;

    return (
      <View style={styles.container}>
        <ProfileHeader closeModal={() => navigator.dismissModal()} />
        <ProfileSubHeader user={user} />
        <ProfileContent
          onLogout={logout}
          onChangePassword={this.onChangePassword}
        />
      </View>
    );
  }
}

ProfileScreen.navigatorStyle = {
  navBarHidden: true
};

ProfileScreen.propTypes = {
  navigator: object.isRequired,
  user: object.isRequired,
  logout: func.isRequired
};

const mapState = state => ({
  user: state.getIn(['session', 'user']).toJS()
});

const mapDispatch = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapState, mapDispatch)(ProfileScreen);
