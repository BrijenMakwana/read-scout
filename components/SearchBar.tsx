import React from 'react';
import {TextInput, StyleSheet, View, Pressable, Text} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="search books" />

      <Pressable style={styles.btn}>
        <Text style={styles.text}>search</Text>
      </Pressable>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    gap: 15,
  },
  input: {
    padding: 10,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#fff',
    color: '#000',
    fontSize: 15,
  },
  btn: {
    backgroundColor: '#fca311',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    color: '#000',
    textTransform: 'capitalize',
  },
});
