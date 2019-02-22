import { StyleSheet } from 'react-native';

import {
  dialogBackgroundColor,
  whiteColor,
  greyDialogBorder,
  redColor,
  fontMedium,
  greenColor,
  primaryColor,
  greyCartColor
} from 'constants/styleConstants';

const dialogHeight = 243;
const actionsHeight = 80;
const headerHeight = 50;

const styles = StyleSheet.create({
  content: {
    height: dialogHeight - headerHeight - actionsHeight,
    paddingHorizontal: 20,
  },

  container: {
    alignItems: 'center',
    backgroundColor: dialogBackgroundColor,
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    paddingTop: '55%',
    position: 'absolute',
    width: '100%',
    zIndex: 10,
  },

  dialog: {
    backgroundColor: whiteColor,
    borderRadius: 5,
    height: dialogHeight,
    width: '100%',
  },

  actions: {
    alignItems: 'center',
    borderTopColor: greyDialogBorder,
    borderTopWidth: 1,
    flexDirection: 'row',
    height: actionsHeight,
    justifyContent: 'center',
  },

  notDeliveredButton: {
    marginHorizontal: 7.5,
    width: '40%',
    backgroundColor: redColor,
  },

  deliveredButton: {
    marginHorizontal: 7.5,
    width: '40%',
    backgroundColor: greenColor,
  },

  header: {
    alignItems: 'center',
    flexDirection: 'row',
    height: headerHeight,
    paddingLeft: 20,
    paddingRight: 10,
  },

  headerText: {
    color: primaryColor,
    fontSize: 21,
    fontFamily: fontMedium,
    marginRight: 'auto',
    marginTop: 8,
  },

  text: {
    color: greyCartColor,
    fontSize: 15,
    letterSpacing: 0.4,
    lineHeight: 20,
    marginTop: 1,
  },
});

export default styles;
