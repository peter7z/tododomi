import { StyleSheet } from 'react-native';

import { secondaryColor, whiteColor } from 'constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteColor,
  },
  activity: { paddingTop: '40%' },

  scroll: {
    height: '100%',
    paddingTop: 26
  },

  title: {
    color: secondaryColor,
    fontSize: 21,
    marginLeft: 15
  },
});

export default styles;
