import React from 'react';
import {useState} from 'react';
import {View, FlatList} from 'react-native';
import SearchBar from '../components/SearchBar';
import Book from '../components/Book';
import useSearch from '../hooks/useSearch';
import Divider from '../components/Divider';
import {StyleSheet} from 'react-native-macos';

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  const {data, refetch} = useSearch(search);

  return (
    <View style={styles.container}>
      <SearchBar setSearch={setSearch} onPress={refetch} />

      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => <Book {...item.volumeInfo} id={item.id} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Divider}
        columnWrapperStyle={{
          gap: 5,
        }}
        contentContainerStyle={{
          gap: 5,
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6F6',
  },
});
