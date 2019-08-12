import React, { useRef, useCallback } from 'react'
import { View, Text, TouchableOpacity, Animated, LayoutAnimation } from 'react-native'
import { debounce } from 'lodash';

import useToggle from 'hooks/useToggle';
import translate from 'utils/i18n';

import OpenLock from 'components/Icons/OpenLock';
import ClosedLock from 'components/Icons/ClosedLock';

import styles, { animatedStyles } from './styles';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const toggleReception = ({ available }) => {
  const [state, toggleState] = useToggle(available);
  const { current: value } = useRef(new Animated.Value(available ? 0 : 1))

  const toggle = useCallback(debounce(() => {
      LayoutAnimation.easeInEaseOut();
      toggleState();
      Animated.timing(value, {
          toValue: (value._value + 1) % 2,
          duration: 300,
      }).start();
    },
    300,
    { leading: true, trailing: false }
    ), []
  )

  return (
    <AnimatedTouchable activeOpacity={1} onPress={toggle} style={[styles.container, animatedStyles.backgroundColor(value)]}>

      <Animated.View style={[styles.resting, animatedStyles.x(value)]}><Text style={styles.red}>{translate('DASHBOARD.resting')}</Text></Animated.View>
      <Animated.View style={[styles.available, animatedStyles.x(value, true)]}><Text style={styles.green}>{translate('DASHBOARD.available')}</Text></Animated.View>

      <Animated.View style={[styles.lock, state ? styles.left : styles.right, animatedStyles.color(value)]}>
        {
          state ? 
            <OpenLock /> :
            <ClosedLock />
        }
      </Animated.View>
    </AnimatedTouchable>
  )
}

export default toggleReception
