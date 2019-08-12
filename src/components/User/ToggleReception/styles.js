import { StyleSheet } from 'react-native';
import { primaryColor, lightRedColor, lightGreenColor, redColor, greenColor, fontMedium } from 'constants/styleConstants';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 113,
    borderRadius: 28,
    overflow: 'hidden',
  },

  resting: {
    position: 'absolute',
    top: 0,
    right: 13,
    bottom: 0,
    width: "100%",
    height: "100%",
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  available: {
    position: 'absolute',
    top: 0,
    left: 13,
    bottom: 0,
    width: "100%",
    height: "100%",
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  lock: {
    height: 35,
    width: 35,
    borderRadius: 18,
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },

  left: {
    alignSelf: 'flex-start',
  },
  
  right: {
    alignSelf: 'flex-end',
  },

  collapsed: {
    width: '0%',
  },
  red: {
    color: redColor,
    fontSize: 13,
    fontFamily: fontMedium,
  },

  green: {
    color: greenColor,
    fontSize: 13,
    fontFamily: fontMedium,
  }
});

export const animatedStyles = {

  backgroundColor: value => ({
    backgroundColor: value.interpolate({
      inputRange: [0, 1],
      outputRange: [lightRedColor, lightGreenColor]
    })
  }),

  color: (value) => ({
    backgroundColor: value.interpolate({
      inputRange: [0, 1],
      outputRange: [redColor, greenColor]
    }),
  }),

  x: (value, flip) => {
    return {
      transform: [
        {
          translateX: value.interpolate({
            inputRange: [0, 1],
            outputRange: [flip ? -78 : 0, flip ? 0 : 78]
          })
        },
      ]
    }
  }
}
