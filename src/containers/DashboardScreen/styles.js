import { StyleSheet } from 'react-native';

import {
  lightGreyColor,
  height,
} from 'constants/styleConstants';

export const headerHeight = 80;
export const scrollheight = height - headerHeight;

export const styles = StyleSheet.create({
  activity: { paddingTop: '50%' },

  scroll: {
    borderTopColor: lightGreyColor,
    borderTopWidth: 1,
  },
});
