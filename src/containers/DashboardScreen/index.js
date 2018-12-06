import React from 'react';
import { object, func, bool, array } from 'prop-types';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import translate from 'utils/i18n';
import { secondaryColor } from 'constants/styleConstants';
import OrdersGroups from 'components/Orders/OrdersGroups';
import OrdersEmptyState from 'components/Orders/OrdersEmptyState';
import ProfileAvatar from 'components/Common/Avatar';
import Header from 'components/Common/Header';
import { getOrders, setOrders } from 'actions/orderActions';
import { TODAY_ID } from 'constants/appConstants';
import { PROFILE_SCREEN, ORDERS_GROUP_SCREEN } from '../../screens';
import { styles, headerHeight, scrollheight } from './styles';

class DashboardScreen extends React.Component {
  constructor() {
    super();

    this.onEnterGroup = this.onEnterGroup.bind(this);
    this.showProfile = this.showProfile.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
  }

  componentDidMount() {
    this.props.getOrders();
  }

  onCollapse(day) {
    const { ordersGroups, setOrders } = this.props;
    const modifiedOrdersGroups = ordersGroups.map(ordersGroup =>
      ((ordersGroup.day === day) ? { ...ordersGroup, isCollapsed: !ordersGroup.isCollapsed } : ordersGroup));
    setOrders(modifiedOrdersGroups);
  }

  onEnterGroup(id, group) {
    this.props.navigator.push({
      screen: ORDERS_GROUP_SCREEN,
      passProps: { group, disabled: id !== TODAY_ID }
    });
  }

  showProfile() {
    this.props.navigator.showModal({
      screen: PROFILE_SCREEN
    });
  }

  render() {
    const { user: { avatar, fullName }, loading, ordersGroups } = this.props;

    return (
      <View>
        <Header
          title={translate('DASHBOARD.title')}
          color={secondaryColor}
          height={headerHeight}
          leftContainer={
            <ProfileAvatar
              avatar={avatar}
              name={fullName}
              onPress={this.showProfile}
            />
          }
        />
        <ScrollView style={[styles.scroll, { height: scrollheight }]}>
          {loading && <ActivityIndicator style={styles.activity} size="small" />}
          {!loading && (
            Boolean(ordersGroups.length)
              ? ordersGroups.map(({ id, day, groups, isCollapsed }) => (
                <OrdersGroups
                  key={id}
                  day={day}
                  groups={groups}
                  isCollapsed={isCollapsed}
                  onCollapse={this.onCollapse}
                  onEnterGroup={group => this.onEnterGroup(id, group)}
                />
              ))
              : <OrdersEmptyState />
          )}
        </ScrollView>
      </View>
    );
  }
}

DashboardScreen.navigatorStyle = {
  navBarHidden: true
};

DashboardScreen.propTypes = {
  navigator: object.isRequired,
  user: object.isRequired,
  ordersGroups: array.isRequired,
  getOrders: func.isRequired,
  setOrders: func.isRequired,
  loading: bool.isRequired,
};

const mapState = state => ({
  user: state.getIn(['session', 'user']).toJS(),
  loading: state.getIn(['orders', 'ordersLoading']),
  ordersGroups: state.getIn(['orders', 'ordersGroups']).toJS(),
});

const mapDispatch = dispatch => ({
  getOrders: () => dispatch(getOrders()),
  setOrders: ordersGroups => dispatch(setOrders(ordersGroups)),
});

export default connect(mapState, mapDispatch)(DashboardScreen);
