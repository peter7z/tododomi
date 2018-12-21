import { StyleSheet } from 'react-native';

import {
  fontRegular,
  greyBorderColor,
  groceryGreyColor, secondaryColor,
  whiteColor
} from 'constants/styleConstants';

const styles = StyleSheet.create({
  details: { paddingHorizontal: 0 },
  detailsContainer: { flexDirection: 'row' },

  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 19,
    paddingVertical: 16,
  },

  infoContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 16,
  },

  image: {
    borderRadius: 10,
    height: 56,
    resizeMode: 'contain',
    width: 56,
  },

  name: {
    color: groceryGreyColor,
    fontFamily: fontRegular,
    fontSize: 13,
    paddingBottom: 2,
  },

  checkQuantityContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  quantityContainer: {
    backgroundColor: whiteColor,
    borderColor: greyBorderColor,
    borderRadius: 28,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },

  quantity: {
    color: secondaryColor,
    fontFamily: fontRegular,
    fontSize: 13,
  }
});

export default styles;
