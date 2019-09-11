import { StyleSheet } from 'react-native';
import {
  fontMedium,
  fontRegular,
  groceryGreyColor,
  greyBorderColor,
  secondaryColor
} from 'constants/styleConstants';

export const groceryImageSize = 60;
export const phoneIconSize = 40;

const styles = StyleSheet.create({
  infoContainer: { marginLeft: 15 },
  infoSubContainer: { flexDirection: 'row' },
  avatarContainer: { position: 'relative' },
  container: { padding: 16 },

  content: {
    alignItems: 'center',
    borderBottomColor: greyBorderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingBottom: 16,
  },

  leftContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  title: {
    color: secondaryColor,
    fontFamily: fontMedium,
    fontSize: 16,
  },

  subtitle: {
    color: groceryGreyColor,
    fontFamily: fontRegular,
    fontSize: 15,
    marginTop: 3,
    maxWidth: '90%',
  },

  phone: {
    marginLeft: 'auto',
    opacity: 0.6,
  },
});

export default styles;
