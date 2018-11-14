import { StyleSheet } from 'react-native';
import {
  fontMedium,
  primaryColor,
  whiteColor,
  mediumGreyColor,
  lightGreyColor
} from 'constants/styleConstants';

const styles = (width, marginBottom, marginTop, marginHorizontal) =>
  StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      backgroundColor: primaryColor,
      borderRadius: 28,
      display: 'flex',
      justifyContent: 'center',
      marginBottom: marginBottom || 0,
      marginTop: marginTop || 0,
      marginHorizontal: marginHorizontal || 0,
      paddingVertical: 15,
      width: width || 'auto'
    },

    transparentStyle: {
      backgroundColor: `${lightGreyColor}70`,
      borderColor: mediumGreyColor,
      borderWidth: 1
    },

    buttonText: {
      color: whiteColor,
      fontFamily: fontMedium,
      fontSize: 15
    },

    transparentText: {
      color: primaryColor
    }
  });

export default styles;
