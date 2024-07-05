import React, {useState} from 'react';
import {FlatList, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import SearchBar from './components/SearchBar';
import Book from './components/Book';
import useSearch from './hooks/useSearch';
import Divider from './components/Divider';

const queryClient = new QueryClient();

const Books = () => {
  const [search, setSearch] = useState('');

  const {data, refetch} = useSearch(search);

  return (
    <>
      <SearchBar setSearch={setSearch} onPress={refetch} />

      <FlatList
        data={data}
        renderItem={({item}) => <Book {...item.volumeInfo} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Divider}
      />
    </>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Books />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
