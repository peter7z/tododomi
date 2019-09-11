import { StyleSheet } from 'react-native';
import { height, whiteColor, fontRegular, greyContentColor } from 'constants/styleConstants';
import { onIPhoneX } from 'utils/helpers';

const scrollPadding = 8;
export const headerHeight = 60;
export const footerHeight = onIPhoneX() ? 120 : 92;
export const scrollHeight = height - scrollPadding - headerHeight - footerHeight;
export const styles = StyleSheet.create({
  container: { backgroundColor: whiteColor, height, justifyContent: 'flex-end' },

  content: {
    marginTop: 'auto',
    fontFamily: fontRegular,
    fontSize: 15,
    paddingTop: 27,
    paddingHorizontal: 15,
    color: greyContentColor
  }
});
