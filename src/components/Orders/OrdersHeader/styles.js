import { StyleSheet } from 'react-native';
import {
  appSideSpace,
  fontMedium,
  fontRegular,
  groceryGreyColor,
  iOSstatusBarHeight,
  iOSstatusBarHeightiPhoneX,
  paleGreyColor,
  primaryActiveColor,
  secondaryColor
} from 'constants/styleConstants';
import { onIPhoneX } from 'utils/helpers';

export const groceryImageSize = 56;

const styles = StyleSheet.create({
  infoContainer: { marginLeft: 25 },
  infoSubContainer: { flexDirection: 'row' },
  avatarContainer: { position: 'relative' },

  consumerAvatar: {
    position: 'absolute',
    left: groceryImageSize / 1.5,
    top: groceryImageSize / 5
  },

  container: {
    alignItems: 'center',
    borderBottomColor: paleGreyColor,
    borderBottomWidth: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: onIPhoneX() ? iOSstatusBarHeightiPhoneX : iOSstatusBarHeight,
    paddingHorizontal: appSideSpace,
    paddingVertical: 16
  },

  middleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 15
  },

  title: {
    color: secondaryColor,
    fontFamily: fontMedium,
    fontSize: 16
  },

  subtitle: {
    color: groceryGreyColor,
    fontFamily: fontRegular,
    fontSize: 13,
    marginTop: 3
  },

  quantity: {
    color: primaryActiveColor,
    fontFamily: fontMedium,
    fontSize: 15,
    marginLeft: 6
  }
});

export default styles;
