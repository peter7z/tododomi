import { StyleSheet } from 'react-native';

import {
  lightGreyColor,
  whiteColor,
  height,
} from 'constants/styleConstants';

const scrollPadding = 8;
export const headerHeight = 90;
export const footerHeight = 92;
export const scrollHeight = height - scrollPadding - headerHeight - footerHeight;

export const styles = StyleSheet.create({
  activity: { paddingTop: '50%' },

  scroll: {
    backgroundColor: lightGreyColor,
    borderTopColor: lightGreyColor,
    borderTopWidth: 1,
    paddingTop: scrollPadding,
  },

  scrollContent: {
    backgroundColor: whiteColor,
    minHeight: scrollHeight - scrollPadding,
  }
});
