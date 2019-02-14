import { StyleSheet } from 'react-native';

import { greyBorderColor, redColor } from 'constants/styleConstants';

export const buttonWidth = '45%';

const styles = StyleSheet.create({
  secondButton: { marginHorizontal: 7.5 },

  firstButton: {
    backgroundColor: redColor,
    marginHorizontal: 7.5,
  },

  buttonsContainer: {
    flexDirection: 'row',
    paddingTop: 12,
    justifyContent: 'center',
  },

  container: {
    borderTopColor: greyBorderColor,
    borderTopWidth: 1
  },
});

export default styles;
