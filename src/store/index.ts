import {create} from 'zustand';

const useBookShelves = create(set => ({
  books: [],
  addBook: bookId => set(state => ({books: [...state.books, bookId]})),
}));

export default useBookShelves;
