import { StyleSheet } from 'react-native';

import { greyBorderColor } from 'constants/styleConstants';

export const buttonWidth = '90%';

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 7.5,
  },

  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 5,
    justifyContent: 'center',
  },

  container: {
    borderTopColor: greyBorderColor,
    borderTopWidth: 1,
  },
});

export default styles;
