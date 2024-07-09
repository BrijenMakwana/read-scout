import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SearchBar from './components/SearchBar';
import Book from './components/Book';
import useSearch from './hooks/useSearch';
import Divider from './components/Divider';
import BookScreen from './screens/BookScreen';
import BookShelvesScreen from './screens/BookShelvesScreen';

const queryClient = new QueryClient();

const Stack = createStackNavigator();

const Books = () => {
  const [search, setSearch] = useState('');

  const {data, refetch} = useSearch(search);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF6F6',
      }}>
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

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Books} />
          <Stack.Screen name="Book" component={BookScreen} />
          <Stack.Screen name="BookShelves" component={BookShelvesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
