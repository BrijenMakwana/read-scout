import React from 'react';
import {TextInput, StyleSheet, View, Pressable, Text} from 'react-native';

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
        onChangeText={setSearch}
        onSubmitEditing={onPress}
      />

      <Pressable style={styles.btn} onPress={onPress}>
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
