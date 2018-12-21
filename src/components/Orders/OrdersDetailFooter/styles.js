import { StyleSheet } from 'react-native';

import { greyBorderColor, redColor } from 'constants/styleConstants';

export const buttonWidth = '45%';

const styles = StyleSheet.create({
  secondButton: { marginHorizontal: 7.5 },

  firstButton: {
    backgroundColor: redColor,
    marginHorizontal: 7.5,
  },

  container: {
    borderTopColor: greyBorderColor,
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 26,
    justifyContent: 'center',
  },
});

export default styles;
