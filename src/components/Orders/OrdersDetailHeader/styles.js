import { StyleSheet } from 'react-native';
import {
  fontMedium,
  fontRegular,
  groceryGreyColor,
  iOSstatusBarHeight,
  iOSstatusBarHeightiPhoneX,
  paleGreyColor,
  secondaryColor
} from 'constants/styleConstants';
import { onIPhoneX } from 'utils/helpers';

export const groceryImageSize = 56;
export const locationIconSize = 40;

const styles = StyleSheet.create({
  infoContainer: { marginLeft: 16, maxWidth: '70%' },
  infoSubContainer: { flexDirection: 'row' },
  avatarContainer: { position: 'relative' },
  separator: { color: groceryGreyColor },
  drive: { marginLeft: 'auto' },

  container: {
    alignItems: 'center',
    borderBottomColor: paleGreyColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginTop: onIPhoneX() ? iOSstatusBarHeightiPhoneX : iOSstatusBarHeight,
    padding: 16,
  },

  middleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 15,
  },

  title: {
    color: secondaryColor,
    fontFamily: fontMedium,
    fontSize: 16,
  },

  subtitle: {
    color: groceryGreyColor,
    fontFamily: fontRegular,
    fontSize: 13,
    marginTop: 3,
  },
});

export default styles;
