import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
const basketIcon = require('./images/basket.png');

function renderItem (item, onPressItem) {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => onPressItem(item.id)}
      >
        <View style={styles.iconContainer}>
          <Image source={basketIcon} style={styles.icon} />
        </View>
        <View style={styles.info}>
          <Text style={styles.items}>{item.items} Items</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.price}>${item.total}</Text>
        </View>
    </TouchableOpacity>
  );
};

class List extends Component {

  render() {
    const { list, onPressItem } = this.props;
    return (
      <FlatList
        data={list}
        renderItem={({ item }) => renderItem(item, onPressItem)}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#feb401',
    borderColor: '#feaf12',
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  icon: {
    tintColor: '#fff',
    height: 22,
    width: 22,
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  items: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  address: {
    color: '#ccc',
    fontSize: 14,
  },
  total: {
    width: 80,
  },
  date: {
    fontSize: 12,
    marginBottom: 5,
  },
  price: {
    color: '#1cad61',
    fontSize: 25,
    fontWeight: 'bold',
  }
});

export default List;
