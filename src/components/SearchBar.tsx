import React from 'react';
import {View, TextInput, StyleSheet, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface ISearchBar {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onPress: () => void;
}

const SearchBar = (props: ISearchBar) => {
  const {setSearch, onPress} = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="search books"
        placeholderTextColor="#686D76"
        onChangeText={setSearch}
        onSubmitEditing={onPress}
      />

      <Pressable style={styles.btn} onPress={onPress}>
        <Icon name="search" size={18} color="#fff" />
        <Text style={styles.text}>search</Text>
      </Pressable>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    flex: 1,
  },
  input: {
    padding: 15,
    fontSize: 15,
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 10,
    flex: 1,
  },
  btn: {
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#4ecdc4',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    cursor: 'pointer',
  },
  text: {
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: '500',
  },
});
