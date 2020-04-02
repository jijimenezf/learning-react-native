import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { actionCreators } from './todoListRedux';
import List from './List';
import Input from './Input';

import store from './store';

class App extends Component {
  state = {}

  UNSAFE_componentWillMount() {
    const { todos } = store.getState();
    this.setState({todos});

    this.unsuscribe = store.subscribe(() => {
      const { todos } = store.getState();
      this.setState({todos});
    });
  }

  componentWillUnmount() {
    this.unsuscribe();
  }

  onRemoveItem = (itemId) => {
    store.dispatch(actionCreators.remove(itemId));
  };

  updateList = (record) => {
    store.dispatch(actionCreators.add(record));
  };

  render() {
    const { todos } = this.state;
    return (
      <View style={styles.mainContainer}>
        <Text style={[styles.header, styles.title]}>Clasic To-Do List</Text>
        <Input
          placeholder="Enter the address for the next item"
          onSubmit={this.updateList}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'skyblue',
    padding: 15,
  },
  title: {
    textAlign: 'center',
    color: 'white',
  },
});

export default App;
