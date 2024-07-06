import React from 'react';
import {ScrollView, Text, Image, StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import useBook from '../hooks/useBook';
import GoBack from '../components/GoBack';
import Book from '../components/Book';

const BookScreen = () => {
  const route = useRoute();
  const {bookId} = route.params;

  const {data, isFetching, error} = useBook(bookId);

  if (isFetching) return <Text>Loading...</Text>;

  if (error) return <Text>Error</Text>;

  const {description} = data.volumeInfo;

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 15,
      }}>
      <GoBack />

      <Book {...data.volumeInfo} />

      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    color: '#686D76',
    padding: 10,
  },
});
