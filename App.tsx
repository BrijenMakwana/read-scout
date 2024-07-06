import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SearchBar from './components/SearchBar';
import Book from './components/Book';
import useSearch from './hooks/useSearch';
import Divider from './components/Divider';

const queryClient = new QueryClient();

const Stack = createStackNavigator();

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
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Books} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
