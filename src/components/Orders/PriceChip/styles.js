import { StyleSheet } from 'react-native';
import { redColor, fontMedium, whiteColor, greenColor, greyContentColor } from 'constants/styleConstants';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    paddingHorizontal: 11,
    marginLeft: 11,
    backgroundColor: redColor,
    borderRadius: 18,
  },
  greenBackground: {
    paddingHorizontal: 11,
    paddingVertical: 5,
    marginLeft: 11,
    backgroundColor: greenColor,
    borderRadius: 18,
  },
  paddingVertical: {
    paddingVertical: 5,
  },
  text: {
    fontFamily: fontMedium,
    fontSize: 14,
    color: greyContentColor,
  },
  whiteText: {
    color: whiteColor,
  },
  greenText: {
    color: greenColor,
  }
});
