import { StyleSheet } from 'react-native';
import {
  greyListBorderColor,
  secondaryColor,
  greyContentColor,
  groceryGreyColor,
  fontMedium
} from 'constants/styleConstants';

export const userLogoSize = 32;
export const checkSize = 26;
export const addressLines = 1;
export const addressMode = 'tail';

const styles = StyleSheet.create({
  nameBold: { fontFamily: fontMedium },
  bar: { color: groceryGreyColor },
  linkText: { fontSize: 15 },
  location: { paddingHorizontal: 5 },

  container: {
    alignItems: 'center',
    borderBottomColor: greyListBorderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  row: {
    flexShrink: 1,
    marginLeft: 15,
  },

  name: {
    color: secondaryColor,
    fontSize: 16,
    paddingVertical: 2
  },

  address: {
    color: greyContentColor,
    fontSize: 15,
    flexShrink: 1,
  },

  checkContainer: {
    marginLeft: 'auto',
    paddingLeft: 5,
  },

  linkTextContainer: {
    paddingHorizontal: 0,
    paddingVertical: 2
  },

  addressContainer: {
    flexDirection: 'row',
    paddingVertical: 2
  },
});

export default styles;
