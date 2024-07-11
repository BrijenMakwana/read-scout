import React from 'react';
import useBook from '../hooks/useBook';
import BookItem from './BookItem';

interface IBookShelfBook {
  bookId: string;
}

const BookShelfBook = (props: IBookShelfBook) => {
  const {bookId} = props;
  const {data} = useBook(bookId);

  return <BookItem {...data.volumeInfo} />;
};

export default BookShelfBook;
