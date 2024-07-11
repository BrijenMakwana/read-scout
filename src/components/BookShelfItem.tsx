import React from 'react';
import useBook from '../hooks/useBook';
import BookItem from './BookItem';

interface IBookShelfItem {
  bookId: string;
}

const BookShelfItem = (props: IBookShelfItem) => {
  const {bookId} = props;
  const {data} = useBook(bookId);

  return <BookItem {...data} />;
};

export default BookShelfItem;
