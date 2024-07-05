import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import SearchBar from './components/SearchBar';
import Book from './components/Book';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SearchBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Book />
        <Book />
        <Book />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
