import React, { useRef, useCallback } from 'react'
import { connect } from 'react-redux';
import { Text, TouchableOpacity, Animated, LayoutAnimation } from 'react-native'
import { debounce } from 'lodash';

import { toggleReception } from 'actions/userActions';

import useToggle from 'hooks/useToggle';
import translate from 'utils/i18n';

import OpenLock from 'components/Icons/OpenLock';
import ClosedLock from 'components/Icons/ClosedLock';

import styles, { animatedStyles } from './styles';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const ToggleReception = ({ available, toggleReception }) => {
  const [state, toggleState] = useToggle(available);
  const [disabled, toggleDisabled] = useToggle(false);
  const { current: value } = useRef(new Animated.Value(available ? 1 : 0))

  const animation = useCallback(debounce(() => {
      LayoutAnimation.easeInEaseOut();
      toggleState();
      Animated.timing(value, {
          toValue: (value._value + 1) % 2,
          duration: 300,
      }).start();
    },
    300,
    { leading: true, trailing: false },
  ))

  const toggle = async () => {
    if (!disabled) {
      toggleDisabled();
      try {
        animation();
        await toggleReception();
      } catch (error) {
        animation();
      }
      setTimeout(toggleDisabled, 300);
    }
  };

  return (
    <AnimatedTouchable activeOpacity={1} onPress={toggle} style={[styles.container, animatedStyles.backgroundColor(value)]}>

      <Animated.View style={[styles.resting, animatedStyles.x(value)]}><Text style={styles.red}>{translate('DASHBOARD.resting')}</Text></Animated.View>
      <Animated.View style={[styles.available, animatedStyles.x(value, true)]}><Text style={styles.green}>{translate('DASHBOARD.available')}</Text></Animated.View>

      <Animated.View style={[styles.lock, state ? styles.right : styles.left, animatedStyles.color(value)]}>
        {
          state ? 
            <ClosedLock />
            :
            <OpenLock />
        }
      </Animated.View>
    </AnimatedTouchable>
  )
}

const mapState = state => ({
  available: state.getIn(['session', 'user', 'active']),
});


export default connect(mapState, { toggleReception })(ToggleReception);
