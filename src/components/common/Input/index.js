import React, { Component } from 'react';
import { ViewPropTypes } from 'react-native';
import { string, object, func, oneOf, bool } from 'prop-types';
import { TextField } from 'react-native-material-textfield';

import { fontRegular, mediumGreyColor, primaryColor, redColor } from 'constants/styleConstants';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFocus() {
    const { input, onFocus: onFocusExternal } = this.props;
    const { onFocus } = input;
    onFocus && onFocus();
    onFocusExternal && onFocusExternal();

    this.setState({
      isFocused: true
    });
  }

  onBlur() {
    const { input, onBlur: onBlurExternal } = this.props;
    const { onBlur } = input;
    onBlur && onBlur();
    onBlurExternal && onBlurExternal();

    this.setState({
      isFocused: false
    });
  }

  onChange(text) {
    const { input, onChange: externalChange } = this.props;
    const { onChange } = input;

    onChange && onChange(text);
    externalChange && externalChange(text);
  }

  render() {
    const {
      input: { value },
      label,
      password = false,
      autoCapitalize = 'none',
      isActive = false,
      error,
      meta,
      containerStyle,
      ...restProps
    } = this.props;
    const { isFocused } = this.state;
    const { touched, error: metaError } = meta;
    const fontStyle = { fontFamily: fontRegular };

    let displayError = null;

    if (touched && metaError) {
      displayError = typeof metaError === 'string' ? metaError : metaError[0];
    }

    return (
      <TextField
        label={label}
        tintColor={primaryColor}
        lineColor={isActive || isFocused ? primaryColor : mediumGreyColor}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChangeText={this.onChange}
        labelPadding={12}
        fontSize={15}
        errorColor={redColor}
        labelTextStyle={fontStyle}
        titleTextStyle={fontStyle}
        affixTextStyle={fontStyle}
        secureTextEntry={password}
        autoCapitalize={autoCapitalize}
        error={error || displayError}
        value={value}
        containerStyle={containerStyle}
        {...restProps}
      />
    );
  }
}

Input.propTypes = {
  input: object.isRequired,
  label: string.isRequired,
  containerStyle: ViewPropTypes.style,
  onChange: func,
  error: string,
  isActive: bool,
  password: bool,
  autoCapitalize: oneOf(['none', 'characters', 'words', 'sentences']),
  onFocus: func,
  onBlur: func,
  restProps: object,
  meta: object
};

export default Input;
