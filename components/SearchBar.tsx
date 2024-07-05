import React from 'react';
import {TextInput, StyleSheet, View, Pressable, Text} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="search books"
        placeholderTextColor="#939185"
      />

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
    padding: 10,
    justifyContent: 'space-between',
    gap: 15,
  },
  input: {
    padding: 10,
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 50,
    color: '#000',
    fontSize: 15,
  },
  btn: {
    backgroundColor: '#8DECB4',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  text: {
    color: '#000',
    textTransform: 'capitalize',
  },
});
