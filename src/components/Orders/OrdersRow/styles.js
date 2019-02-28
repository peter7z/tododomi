import { StyleSheet } from 'react-native';
import {
  secondaryColor,
  greyContentColor,
  groceryGreyColor,
  fontMedium,
  lightGreyColor
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
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 90,
    paddingHorizontal: 15,
  },

  leftContainer: {
    alignItems: 'center',
    width: '15%',
  },

  line: {
    flex: 1,
    width: 2,
    backgroundColor: lightGreyColor
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
