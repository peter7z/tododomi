import { StyleSheet } from 'react-native';

import { secondaryColor } from 'constants/styleConstants';

const styles = StyleSheet.create({
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
