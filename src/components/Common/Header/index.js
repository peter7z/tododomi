import React from 'react';
import { View, Text, Image, ViewPropTypes } from 'react-native';
import { string, node, number } from 'prop-types';

import { primaryColor } from 'constants/styleConstants';
import styles from './styles';

const Header = ({
  title,
  titleIcon,
  subtitle,
  leftContainer = <View />,
  rightContainer = <View />,
  titleFontSize = 16,
  color = primaryColor,
  style
}) => (
  <View style={[styles.container, style]}>
    <View style={styles.leftContainer}>{leftContainer}</View>

    <View style={[styles.middleContainer, styles.third]}>
      <View style={styles.titleContainer}>
        <Image source={titleIcon} />
        <Text style={[styles.titleStyle, { color, fontSize: titleFontSize }]}>{title}</Text>
      </View>
      {subtitle && <Text style={styles.subtitleStyle}>{subtitle}</Text>}
    </View>

    <View style={styles.rightContainer}>{rightContainer}</View>
  </View>
);

Header.propTypes = {
  title: string.isRequired,
  titleIcon: node,
  subtitle: string,
  leftContainer: node,
  rightContainer: node,
  titleFontSize: number,
  color: string,
  style: ViewPropTypes.style
};

export default Header;
