import { StyleSheet } from 'react-native';

import { secondaryColor, whiteColor } from 'constants/styleConstants';

const styles = StyleSheet.create({
  bgImage: { flex: 1, backgroundColor: whiteColor },

  logo: {
    resizeMode: 'contain',
    width: 155,
  },

  app: {
    color: secondaryColor,
    fontSize: 21,
    marginTop: 9,
  },

  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40
  }
});

export default styles;
