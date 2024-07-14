import {create} from 'zustand';

const useBookShelves = create(set => ({
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
}));

export default useBookShelves;
