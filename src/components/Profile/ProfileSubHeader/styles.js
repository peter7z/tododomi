import { StyleSheet } from 'react-native';

import { fontRegular, paleGreyColor, secondaryColor } from 'constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    borderBottomColor: paleGreyColor,
    borderBottomWidth: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16
  },

  name: {
    color: secondaryColor,
    fontFamily: fontRegular,
    fontSize: 21,
    paddingVertical: 12
  }
});

export const size = 48;

export default styles;
