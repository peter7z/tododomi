import { StyleSheet } from 'react-native';

import { paleGreyColor, whiteColor, secondaryColor, fontRegular } from 'constants/styleConstants';

export const stylesProps = even =>
  StyleSheet.create({
    productRow: { backgroundColor: even ? whiteColor : paleGreyColor },
    productImage: { backgroundColor: even ? paleGreyColor : whiteColor },
  });

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  name: {
    color: secondaryColor,
    fontFamily: fontRegular,
    fontSize: 21,
  }
});
