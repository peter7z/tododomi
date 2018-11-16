import { StyleSheet } from 'react-native';

import { lightGreyColor } from 'constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: lightGreyColor,
    borderBottomWidth: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 55,
    paddingBottom: 10,
    paddingHorizontal: 20
  },

  logo: {
    paddingBottom: 15
  }
});

export default styles;
