import { StyleSheet } from 'react-native';

import { onIPhoneX } from 'utils/helpers';
import {
  whiteColor,
  iOSstatusBarHeight,
  iOSstatusBarHeightiPhoneX,
  blackColor
} from 'constants/styleConstants';

const styles = StyleSheet.create({
  content: { paddingHorizontal: 32 },

  container: {
    backgroundColor: whiteColor,
    paddingTop: 20 + (onIPhoneX() ? iOSstatusBarHeightiPhoneX : iOSstatusBarHeight)
  },

  title: {
    color: blackColor,
    fontSize: 24,
    marginTop: 25,
  }
});

export default styles;
