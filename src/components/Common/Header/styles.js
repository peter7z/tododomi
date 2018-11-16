import { StyleSheet } from 'react-native';

import {
  fontMedium,
  greyColor,
  lightGreyColor,
  iOSstatusBarHeight,
  iOSstatusBarHeightiPhoneX,
  appSideSpace
} from 'constants/styleConstants';

import { onIPhoneX } from 'utils/helpers';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: onIPhoneX() ? iOSstatusBarHeightiPhoneX : iOSstatusBarHeight,
    borderBottomWidth: 1,
    borderBottomColor: lightGreyColor,
    paddingHorizontal: appSideSpace,
    paddingVertical: 16,
    width: '100%'
  },

  middleContainer: {
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3
  },

  titleStyle: {
    fontFamily: fontMedium,
    marginLeft: 3.5
  },

  subtitleStyle: {
    color: greyColor,
    fontFamily: fontMedium,
    fontSize: 13
  }
});

export default styles;
