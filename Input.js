import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const createUniqueID = () => {
    const hexString = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16).substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return hexString() + hexString() + '-' + hexString() + '-' +
      hexString() + '-' + hexString() + '-' + hexString() + hexString() + hexString();
};

const generateQuantity = () => parseInt(Math.floor((1 + Math.random()) * 0x10), 10);

const registerDate = () => {
  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const today  = new Date();
  return today.toLocaleDateString("en-US", options);
}

class Input extends Component {
  state = {
    text: '',
  };

  onChangeText = (text) => this.setState({ text });

  onSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) {  // don't submit empty strings, also maybe lodash validation would be useful
      return;
    }
    onSubmit({
      id: createUniqueID(),
      items: generateQuantity(),
      address: text,
      total: generateQuantity(),
      date: registerDate(),
    });
    this.setState({ text: '' });
  };

  render() {
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  },
})

export default Input;
