import { StyleSheet } from 'react-native';

import {
  secondaryColor,
  greenColor,
  greyCartColor,
  fontRegular
} from 'constants/styleConstants';

export const cartSize = 80;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '30%'
  },

  title: {
    color: secondaryColor,
    fontFamily: fontRegular,
    fontSize: 21,
    paddingTop: 10
  },

  description: {
    color: greenColor,
    fontFamily: fontRegular,
    fontSize: 15,
    paddingTop: 8
  },

  thanks: {
    color: greyCartColor,
    fontFamily: fontRegular,
    fontSize: 15,
    paddingTop: 15
  },

  choose: {
    color: greenColor,
    fontSize: 15,
    marginTop: 8,
    textAlign: 'center',
  },

  trust: {
    color: greyCartColor,
    fontSize: 15,
    marginTop: 13,
  }
});

export default styles;
