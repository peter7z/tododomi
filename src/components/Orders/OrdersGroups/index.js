import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import { string, bool, array, func } from 'prop-types';

import TouchableIcon from 'components/Common/TouchableIcon';
import Chevron, { ChevronDirections } from 'components/Icons/Chevron';
import { TOMORROW_ID } from 'constants/appConstants';
import OrderGroup from './OrdersGroup';
import styles from './styles';

const OrdersGroups = ({ id, day, groups, isCollapsed, onCollapse, onEnterGroup, completedOrders, onCollapseOrderStatus }) => (
  <Fragment>
    {(completedOrders || id === TOMORROW_ID) &&
    <Fragment>
      <View style={styles.header}>
        <Text style={styles.day}>{day}</Text>
        <TouchableIcon
          onPress={() => onCollapse(day)}
          icon={<Chevron direction={isCollapsed ? ChevronDirections.UP : ChevronDirections.DOWN} />}
        />
      </View>
      {
        !isCollapsed && groups.map((group) => {
          const { shop: { name }, deliveryTime } = group;
          return (
            <OrderGroup
              key={`${name}-${deliveryTime}`}
              group={group}
              onEnterGroup={onEnterGroup}
            />
          );
        })
      }
    </Fragment>
    }
    {
      !completedOrders && id !== TOMORROW_ID && !isCollapsed && groups &&
      groups.map(({ ordersGroups, status, isCollapsed: isCollapsedStatus }, index) => (
        <Fragment key={index}>
          <View style={styles.header}>
            <Text style={styles.day}>{status}</Text>
            <TouchableIcon
              onPress={() => onCollapseOrderStatus(status)}
              icon={<Chevron direction={isCollapsedStatus ? ChevronDirections.UP : ChevronDirections.DOWN} />}
            />
          </View>
          {
            !isCollapsedStatus && ordersGroups && ordersGroups.map((group) => {
              const { shop: { name }, deliveryTime } = group;
              return (
                <OrderGroup
                  key={`${name}-${deliveryTime}`}
                  group={group}
                  onEnterGroup={onEnterGroup}
                />
              );
            })
          }
        </Fragment>
      ))
    }
  </Fragment>
);

OrdersGroups.propTypes = {
  id: string.isRequired,
  day: string.isRequired,
  groups: array.isRequired,
  isCollapsed: bool.isRequired,
  onCollapse: func.isRequired,
  onEnterGroup: func.isRequired,
  completedOrders: bool.isRequired,
  onCollapseOrderStatus: func.isRequired,
};

export default OrdersGroups;
