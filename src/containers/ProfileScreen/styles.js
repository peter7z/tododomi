import { StyleSheet } from 'react-native';

import { onIPhoneX } from 'utils/helpers';
import {
  whiteColor,
  iOSstatusBarHeight,
  iOSstatusBarHeightiPhoneX
} from 'constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteColor,
    paddingTop: 20 + (onIPhoneX() ? iOSstatusBarHeightiPhoneX : iOSstatusBarHeight)
  },

  content: {
    paddingTop: 25,
    height: '100%'
  }
});

export default styles;
