import React from 'react';
import {ScrollView, Text, StyleSheet, useWindowDimensions} from 'react-native';
import {useRoute} from '@react-navigation/native';
import useBook from '../hooks/useBook';
import GoBack from '../components/GoBack';
import Book from '../components/Book';
import RenderHtml from 'react-native-render-html';

const BookScreen = () => {
  const route = useRoute();
  const {bookId} = route.params;

  const {width} = useWindowDimensions();

  const {data, isFetching, error} = useBook(bookId);

  if (isFetching) return <Text>Loading...</Text>;

  if (error) return <Text>Error</Text>;

  const {description} = data.volumeInfo;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        padding: 15,
      }}>
      <GoBack />

      <Book {...data.volumeInfo} />

      <RenderHtml
        contentWidth={width}
        source={{
          html: description,
        }}
      />
    </ScrollView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF6F6',
    flex: 1,
  },
  description: {
    fontSize: 16,
    color: '#686D76',
    padding: 10,
  },
});
