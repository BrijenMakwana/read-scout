import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import useBook from '../hooks/useBook';
import BookItem from './BookItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useBookShelves from '../store';
import {IBookShelfItem} from '../types';
import Loading from './Loading';

const BookShelfItem = (props: IBookShelfItem) => {
  const {bookId} = props;

  const {data, isFetching, error} = useBook(bookId);

  const {removeBook} = useBookShelves();

  if (isFetching) return <Loading />;

  if (error) return <Text>Error</Text>;

  if (data) {
    return (
      <View style={styles.container}>
        <BookItem {...data} />

        <Pressable onPress={() => removeBook(bookId)}>
          <Icon name="delete" size={30} color="#FF6969" />
        </Pressable>
      </View>
    );
  }
};

export default BookShelfItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
});
