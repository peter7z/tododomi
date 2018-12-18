import { StyleSheet, Platform } from 'react-native';

import {
  secondaryColor,
  greyLogoColor,
  primaryActiveColor,
  groceryGreyColor,
  greenColor,
  whiteColor,
  fontMedium,
  greyListBorderColor
} from 'constants/styleConstants';

const styles = StyleSheet.create({
  info: { marginRight: 'auto' },

  container: {
    alignItems: 'center',
    borderBottomColor: greyListBorderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 77,
    paddingHorizontal: 15
  },

  logo: {
    borderColor: greyLogoColor,
    borderRadius: 19,
    borderWidth: 1,
    height: 38,
    marginRight: 15,
    resizeMode: Platform.OS === 'ios' ? 'center' : 'cover',
    width: 38,
  },

  name: {
    color: secondaryColor,
    fontSize: 16,
  },

  time: {
    color: secondaryColor,
    fontSize: 15,
  },

  separator: {
    color: groceryGreyColor,
    fontSize: 16,
    marginHorizontal: 6,
  },

  count: {
    color: primaryActiveColor,
    fontSize: 15,
    marginLeft: 3,
  },

  infoTop: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 2,
  },

  infoBottom: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  active: {
    alignItems: 'center',
    backgroundColor: greenColor,
    borderRadius: 18,
    height: 25,
    justifyContent: 'center',
    width: 65,
  },

  activeText: {
    color: whiteColor,
    fontFamily: fontMedium,
    fontSize: 14,
  },
});

export default styles;
