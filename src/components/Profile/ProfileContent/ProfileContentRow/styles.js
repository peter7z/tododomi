import { StyleSheet } from 'react-native';

import { fontRegular, paleGreyColor, secondaryColor } from 'constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: paleGreyColor,
    borderBottomWidth: 2,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
    paddingVertical: 16
  },

  leftContainer: { flexDirection: 'row' },

  text: {
    color: secondaryColor,
    fontFamily: fontRegular,
    fontSize: 18,
    paddingLeft: 16
  }
});

export default styles;
