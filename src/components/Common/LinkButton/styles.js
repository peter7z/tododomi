import { StyleSheet } from 'react-native';
import { fontMedium, primaryColor } from 'constants/styleConstants';

const styles = StyleSheet.create({
  linkContainer: { paddingHorizontal: 20 },

  linkText: {
    color: primaryColor,
    fontFamily: fontMedium,
    fontSize: 14
  }
});

export default styles;
