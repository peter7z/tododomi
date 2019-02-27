import { StyleSheet } from 'react-native';
import {
  secondaryColor,
  greyContentColor,
  fontMedium,
  lightGreyColor
} from 'constants/styleConstants';

export const groceryLogoSize = 40;
export const checkSize = 26;
export const addressLines = 1;
export const addressMode = 'tail';

const styles = StyleSheet.create({
  nameBold: { fontFamily: fontMedium },

  container: {
    marginTop: 25,
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 15,
    height: 90,
  },

  bags: {
    marginTop: 5,
    marginLeft: -2,
    alignItems: 'center',
    flexDirection: 'row'
  },

  leftContainer: {
    alignItems: 'center',
    width: '15%',
  },

  line: {
    backgroundColor: lightGreyColor,
    width: 2,
    flex: 1,
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
