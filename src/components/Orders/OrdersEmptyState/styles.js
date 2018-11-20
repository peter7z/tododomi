import { StyleSheet } from 'react-native';

import { secondaryColor, greenColor, greyCartColor } from 'constants/styleConstants';

export const cartSize = 80;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '30%'
  },

  moment: {
    color: secondaryColor,
    fontSize: 21,
    marginTop: 42,
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
