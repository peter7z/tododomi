import { StyleSheet } from 'react-native';

import {
  secondaryColor,
  paleGreyColor
} from 'constants/styleConstants';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: paleGreyColor,
    flexDirection: 'row',
    height: 45,
    paddingHorizontal: 15,
    width: '100%',
  },

  day: {
    color: secondaryColor,
    fontSize: 18,
    marginRight: 'auto',
  },
});

export default styles;
