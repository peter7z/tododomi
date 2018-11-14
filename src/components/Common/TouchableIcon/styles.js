import { StyleSheet } from 'react-native';

import { redColor } from 'constants/styleConstants';

const styles = StyleSheet.create({
  container: { position: 'relative' },

  bubble: {
    backgroundColor: redColor,
    borderRadius: 5,
    height: 10,
    position: 'absolute',
    right: -4,
    top: -10,
    width: 10,
  },
});

export default styles;
