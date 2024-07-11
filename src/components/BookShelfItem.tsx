import React from 'react';
import {Text} from 'react-native';
import useBook from '../hooks/useBook';
import BookItem from './BookItem';

interface IBookShelfItem {
  bookId: string;
}

const BookShelfItem = (props: IBookShelfItem) => {
  const {bookId} = props;

  const {data, isFetching, error} = useBook(bookId);

  if (isFetching) return <Text>Loading...</Text>;

  if (error) return <Text>Error</Text>;

  if (data) return <BookItem {...data} />;
};

export default BookShelfItem;
