import { StyleSheet } from 'react-native';

import {
  lightGreyColor,
  height,
  secondaryButtonTextColor,
  whiteColor
} from 'constants/styleConstants';

export const headerHeight = 80;
export const scrollheight = height - headerHeight;

export const styles = StyleSheet.create({
  container: {
    background: whiteColor,
  },
  activity: { paddingTop: '50%' },

  scroll: {
    borderTopColor: lightGreyColor,
    borderTopWidth: 1,
  },

  tabs: {
    flexDirection: 'row',
  },

  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: secondaryButtonTextColor
  },

  activeTab: {
    backgroundColor: secondaryButtonTextColor,
  },

  inactiveTab: {
    backgroundColor: lightGreyColor,
  }
});
