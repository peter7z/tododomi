import { StyleSheet } from 'react-native';
import {
  greyListBorderColor,
  secondaryColor,
  greyContentColor,
  fontMedium
} from 'constants/styleConstants';

export const groceryLogoSize = 40;
export const checkSize = 26;
export const addressLines = 1;
export const addressMode = 'tail';

const styles = StyleSheet.create({
  nameBold: { fontFamily: fontMedium },

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
    marginLeft: 7,
  },

  name: {
    color: secondaryColor,
    fontSize: 16,
    paddingVertical: 2
  },

  address: {
    color: greyContentColor,
    fontSize: 15,
    paddingVertical: 2,
  },

  checkContainer: {
    marginLeft: 'auto',
    paddingLeft: 5,
  },
});

export default styles;
