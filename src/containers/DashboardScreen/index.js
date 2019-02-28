import { array, bool, func, object } from 'prop-types';
import React from 'react';
import { ScrollView, View, RefreshControl, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { getOrders, getCompletedOrders, setOrders, setCompletedOrders } from 'actions/orderActions';
import ProfileAvatar from 'components/Common/Avatar';
import Header from 'components/Common/Header';
import OrdersEmptyState from 'components/Orders/OrdersEmptyState';
import OrdersGroups from 'components/Orders/OrdersGroups';
import translate from 'utils/i18n';
import { TODAY_ID } from 'constants/appConstants';
import { whiteColor, secondaryButtonTextColor, secondaryColor } from 'constants/styleConstants';
import { PROFILE_SCREEN, ORDERS_GROUP_SCREEN } from '../../screens';
import { styles, headerHeight, scrollheight } from './styles';

class DashboardScreen extends React.Component {
  state = { completedTab: false }

  componentDidMount = () => {
    const { getOrders, getCompletedOrders } = this.props;
    getOrders();
    getCompletedOrders();
  }

  onCollapse = (day) => {
    const { completedOrdersGroups, ordersGroups, setOrders, setCompletedOrders } = this.props;
    const { completedTab } = this.state;
    const group = completedTab ? completedOrdersGroups : ordersGroups;
    const action = completedTab ? setCompletedOrders : setOrders;
    const modifiedOrdersGroups = group.map(ordersGroup =>
      ((ordersGroup.day === day) ? { ...ordersGroup, isCollapsed: !ordersGroup.isCollapsed } : ordersGroup));
    action(modifiedOrdersGroups);
  }

  onEnterGroup = (id, group) => {
    this.props.navigator.push({
      screen: ORDERS_GROUP_SCREEN,
      passProps: { id, group, disabled: id !== TODAY_ID }
    });
  }

  onPullToRefresh = () => {
    this.props.getOrders();
  }

  showProfile = () => {
    this.props.navigator.showModal({
      screen: PROFILE_SCREEN
    });
  }

  completedTab = () => this.setState({ completedTab: true })

  nextTab = () => this.setState({ completedTab: false })

  renderOrders = () => {
    const { ordersGroups, completedOrdersGroups } = this.props;
    const groups = this.state.completedTab ? completedOrdersGroups : ordersGroups;

    return (Boolean(completedOrdersGroups.length) ?
      groups.map(({ id, day, groups, isCollapsed }) => (
        <OrdersGroups
          key={id}
          day={day}
          groups={groups}
          isCollapsed={isCollapsed}
          onCollapse={this.onCollapse}
          onEnterGroup={group => this.onEnterGroup(id, group)}
        />
      ))
      : <OrdersEmptyState />);
  }

  render() {
    const { user: { avatar, fullName }, loading } = this.props;
    const { completedTab } = this.state;

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
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[completedTab ? styles.inactiveTab : styles.activeTab, styles.tab]}
            onPress={this.nextTab}
            disabled={!completedTab}
          >
            <Text style={{ color: completedTab ? secondaryButtonTextColor : whiteColor }}>{translate('DASHBOARD.next')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[completedTab ? styles.activeTab : styles.inactiveTab, styles.tab]}
            onPress={this.completedTab}
            disabled={completedTab}
          >
            <Text style={{ color: completedTab ? whiteColor : secondaryButtonTextColor }}>{translate('DASHBOARD.completed')}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={[styles.scroll, { height: scrollheight }]}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={this.onPullToRefresh}
            />
          }
        >
          {!loading && (this.renderOrders())}
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
  completedOrdersGroups: array.isRequired,
  getOrders: func.isRequired,
  getCompletedOrders: func.isRequired,
  setOrders: func.isRequired,
  setCompletedOrders: func.isRequired,
  loading: bool.isRequired,
};

const mapState = state => ({
  user: state.getIn(['session', 'user']).toJS(),
  loading: state.getIn(['orders', 'ordersLoading']),
  ordersGroups: state.getIn(['orders', 'ordersGroups']).toJS(),
  completedOrdersGroups: state.getIn(['orders', 'completedOrdersGroups']).toJS(),
});

const mapDispatch = dispatch => ({
  getOrders: () => dispatch(getOrders()),
  getCompletedOrders: () => dispatch(getCompletedOrders()),
  setOrders: ordersGroups => dispatch(setOrders(ordersGroups)),
  setCompletedOrders: ordersGroups => dispatch(setCompletedOrders(ordersGroups)),
});

export default connect(mapState, mapDispatch)(DashboardScreen);
