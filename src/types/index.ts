export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    averageRating: number;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    pageCount: number;
    categories: string[];
    publisher: string;
    publishedDate: string;
  };
}

export type StackParamList = {
  Home: undefined;
  Book: {bookId: string};
  BookShelves: undefined;
};
