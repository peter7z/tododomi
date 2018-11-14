import { StyleSheet } from 'react-native';
import { redColor } from 'constants/styleConstants';

export const buttonMargin = 38;

export const styles = StyleSheet.create({
  container: { width: '100%' },

  error: {
    color: redColor,
    marginTop: 10,
    textAlign: 'center'
  }
});
