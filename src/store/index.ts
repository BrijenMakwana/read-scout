import {create} from 'zustand';
import {BookShelves, IBookShelfItem} from '../types';

interface IBookShelves {
  books: IBookShelfItem[];
  addBook: (bookId: string, bookShelfId: BookShelves) => void;
  removeBook: (bookId: string) => void;
  updateBook: (bookId: string, bookShelfId: BookShelves) => void;
}

const useBookShelves = create<IBookShelves>()(set => ({
  books: [],
  addBook: (bookId, bookShelfId) =>
    set(state => ({
      books: [
        ...state.books,
        {
          bookId,
          bookShelfId,
        },
      ],
    })),
  removeBook: bookId =>
    set(state => ({
      books: state.books.filter(book => book.bookId !== bookId),
    })),
  updateBook: (bookId, bookShelfId) =>
    set(state => ({
      books: state.books.map(book => {
        if (book.bookId === bookId) {
          return {
            ...book,
            bookShelfId: bookShelfId,
          };
        }
        return book;
      }),
    })),
}));

export default useBookShelves;
