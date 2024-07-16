import {create} from 'zustand';
import {BookShelves, IBookShelfItem} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IBookShelves {
  books: IBookShelfItem[];
  addBook: (bookId: string, bookShelfId: BookShelves) => void;
  removeBook: (bookId: string) => void;
  updateBook: (bookId: string, bookShelfId: BookShelves) => void;
  loadBooksFromStorage: () => Promise<void>;
}

const syncWithLocalStorage = async (books: IBookShelfItem[]) => {
  try {
    const jsonValue = JSON.stringify(books);
    await AsyncStorage.setItem('books', jsonValue);
  } catch (e) {
    console.error('Error syncing with local storage:', e);
  }
};

const useBookShelves = create<IBookShelves>()(set => ({
  books: [],
  addBook: (bookId, bookShelfId) => {
    set(state => {
      const updatedBooks = [
        ...state.books,
        {
          bookId,
          bookShelfId,
        },
      ];
      syncWithLocalStorage(updatedBooks);
      return {books: updatedBooks};
    });
  },
  removeBook: bookId => {
    set(state => {
      const updatedBooks = state.books.filter(book => book.bookId !== bookId);
      syncWithLocalStorage(updatedBooks);
      return {books: updatedBooks};
    });
  },
  updateBook: (bookId, bookShelfId) => {
    set(state => {
      const updatedBooks = state.books.map(book => {
        if (book.bookId === bookId) {
          return {
            ...book,
            bookShelfId: bookShelfId,
          };
        }
        return book;
      });
      syncWithLocalStorage(updatedBooks);
      return {books: updatedBooks};
    });
  },
  loadBooksFromStorage: async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('books');
      if (jsonValue != null) {
        const books = JSON.parse(jsonValue);
        set({books});
      }
    } catch (e) {
      console.error('Error loading books from local storage:', e);
    }
  },
}));

export default useBookShelves;
