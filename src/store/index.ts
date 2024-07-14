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
}));

export default useBookShelves;
