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
import BookItem from '../components/BookItem';
import RenderHtml from 'react-native-render-html';
import {RouteProp} from '@react-navigation/native';
import {StackParamList} from '../types';
import SelectBookShelf from '../components/SelectBookShelf';
import moment from 'moment';
import ExternalLink from '../components/ExternalLink';
import BookSummary from '../components/BookSummary';

type BookScreenRouteProp = RouteProp<StackParamList, 'Book'>;

const BookScreen = () => {
  const route = useRoute<BookScreenRouteProp>();
  const {bookId} = route.params;

  const {width} = useWindowDimensions();

  const {data, isFetching, error} = useBook(bookId);

  if (isFetching) return <Text>Loading...</Text>;

  if (error) return <Text>Error</Text>;

  const {
    title,
    authors,
    description,
    categories,
    publisher,
    publishedDate,
    previewLink,
  } = data!.volumeInfo;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        padding: 15,
        gap: 15,
      }}>
      <View style={styles.header}>
        <GoBack />
        <SelectBookShelf bookId={bookId} />
      </View>

      <BookItem {...data} isPressable={false} isDescription={false} />

      <View style={styles.categories}>
        {categories?.map((category, index) => (
          <Text key={index} style={styles.category}>
            {category}
          </Text>
        ))}
      </View>

      <Text style={styles.publisher}>
        Published by {publisher} on {moment(publishedDate).format('LL')}
      </Text>

      <ExternalLink previewLink={previewLink} />

      <Text style={styles.heading}>overview:</Text>

      <RenderHtml
        contentWidth={width}
        source={{
          html: description,
        }}
      />

      <BookSummary title={title} authors={authors} />
    </ScrollView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292f36',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  publisher: {
    fontSize: 15,
    fontWeight: '500',
  },
  heading: {
    fontSize: 15,
    fontWeight: '500',
    color: '#4ecdc4',
    textTransform: 'capitalize',
  },
});
