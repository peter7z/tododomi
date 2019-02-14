import { array, bool, func, object } from 'prop-types';
import React from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

import { getOrders, setOrders } from 'actions/orderActions';
import ProfileAvatar from 'components/Common/Avatar';
import Header from 'components/Common/Header';
import OrdersEmptyState from 'components/Orders/OrdersEmptyState';
import OrdersGroups from 'components/Orders/OrdersGroups';
import { secondaryColor } from 'constants/styleConstants';
import translate from 'utils/i18n';
import { TODAY_ID } from 'constants/appConstants';
import { PROFILE_SCREEN, ORDERS_GROUP_SCREEN } from '../../screens';
import { styles, headerHeight, scrollheight } from './styles';

class DashboardScreen extends React.Component {
  constructor() {
    super();

    this.onPullToRefresh = this.onPullToRefresh.bind(this);
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
      passProps: { id, group, disabled: id !== TODAY_ID }
    });
  }

  onPullToRefresh() {
    this.props.getOrders();
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
        <ScrollView
          style={[styles.scroll, { height: scrollheight }]}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={this.onPullToRefresh}
            />
          }
        >
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
