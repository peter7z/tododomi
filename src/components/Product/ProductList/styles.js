import { StyleSheet } from 'react-native';

import { paleGreyColor, whiteColor, secondaryColor, fontRegular } from 'constants/styleConstants';

export const stylesProps = even =>
  StyleSheet.create({
    productRow: { backgroundColor: even ? whiteColor : paleGreyColor },
    productImage: { backgroundColor: even ? paleGreyColor : whiteColor },
  });

export const styles = StyleSheet.create({
  name: {
    color: secondaryColor,
    fontFamily: fontRegular,
    fontSize: 21,
    paddingVertical: 12,
    paddingHorizontal: 16,
  }
});
