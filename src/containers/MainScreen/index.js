import React from 'react';
import { object } from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import ProfileAvatar from 'components/Common/Avatar';
import Header from 'components/Common/Header';
import { PROFILE_SCREEN } from '../../screens';

class MainScreen extends React.Component {
  constructor() {
    super();

    this.showProfile = this.showProfile.bind(this);
  }

  showProfile() {
    this.props.navigator.showModal({
      screen: PROFILE_SCREEN
    });
  }

  render() {
    const { user: { avatar, fullName } } = this.props;
    return (
      <View>
        <Header
          title="Delivery"
          leftContainer={
            <ProfileAvatar
              avatar={avatar}
              name={fullName}
              onPress={this.showProfile}
            />
          }
        />
      </View>
    );
  }
}

MainScreen.navigatorStyle = {
  navBarHidden: true
};

MainScreen.propTypes = {
  navigator: object.isRequired,
  user: object.isRequired,
};

const mapState = state => ({
  user: state.getIn(['session', 'user']).toJS(),
});

export default connect(mapState, null)(MainScreen);
