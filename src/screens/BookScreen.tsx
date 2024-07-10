import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
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

  const {description, categories} = data.volumeInfo;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        padding: 15,
        gap: 15,
      }}>
      <GoBack />

      <Book {...data.volumeInfo} />

      <View style={styles.categories}>
        {categories?.map((category, index) => (
          <Text key={index} style={styles.category}>
            {category}
          </Text>
        ))}
      </View>

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
    backgroundColor: '#292f36',
    flex: 1,
  },
  categories: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  category: {
    borderWidth: 1,
    borderColor: '#4ecdc4',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 13,
    color: '#4ecdc4',
  },
});
