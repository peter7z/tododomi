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
    justifyContent: 'space-between',
    marginTop: onIPhoneX() ? iOSstatusBarHeightiPhoneX : iOSstatusBarHeight,
    borderBottomWidth: 1,
    borderBottomColor: lightGreyColor,
    paddingHorizontal: appSideSpace,
    paddingVertical: 16,
    width: '100%'
  },

  third: {
    flex: .33,
  },

  rightContainer: {
    flex: .33,
    alignItems: 'flex-end',
  },

  leftContainer: {
    flex: .33,
    alignItems: 'flex-start',
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
