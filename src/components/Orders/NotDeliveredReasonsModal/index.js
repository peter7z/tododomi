import React, { PureComponent } from 'react';
import { View, KeyboardAvoidingView, TouchableHighlight, TextInput, Image } from 'react-native';
import { string, func } from 'prop-types';
import crossIcon from 'assets/images/cross-black.png';
import { secondaryColor, transparentColor } from 'constants/styleConstants';
import Header from 'components/Common/Header';
import ModalFooter from './ModalFooter';
import { headerHeight, footerHeight, styles } from './styles';

class NotDeliveredReasonsModal extends PureComponent {
    state = {
      text: '',
    };

  onChangeText = (text) => {
    this.setState({ text });
  }

  render() {
    const { onBack, onSave, title, placeholder, buttonText } = this.props;
    const { text } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Header
          title={title}
          color={secondaryColor}
          height={headerHeight}
          leftContainer={
            <TouchableHighlight onPress={onBack}>
              <Image
                source={crossIcon}
              />
            </TouchableHighlight>
          }
        />
        <TextInput
          style={styles.content}
          placeholder={placeholder}
          onChangeText={this.onChangeText}
          underlineColorAndroid={transparentColor}
          multiline
          textAlignVertical="top"
          returnKeyType="done"
          blurOnSubmit={Boolean(true)}
          autoCorrect={Boolean(false)}
        />
        {onSave &&
          <ModalFooter
            height={footerHeight}
            text={buttonText}
            onSave={() => onSave(false, text)}
            disabledButton={text === ''}
          />
        }
      </KeyboardAvoidingView>
    );
  }
}

NotDeliveredReasonsModal.navigatorStyle = {
  navBarHidden: true
};

NotDeliveredReasonsModal.propTypes = {
  title: string.isRequired,
  onBack: func.isRequired,
  onSave: func.isRequired,
  placeholder: string,
  buttonText: string.isRequired,
};

export default NotDeliveredReasonsModal;
