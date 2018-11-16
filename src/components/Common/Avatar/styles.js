import { StyleSheet } from 'react-native';

import { fontRegular, greyBorderColor, secondaryColor } from 'constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: greyBorderColor,
    borderColor: greyBorderColor,
    borderWidth: 1,
    justifyContent: 'center'
  },

  userInitial: {
    color: secondaryColor,
    fontFamily: fontRegular,
    fontSize: 21
  }
});

export default styles;
