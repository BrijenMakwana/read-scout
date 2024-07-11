import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {IBook} from '../types';

const useSearch = (props: string) => {
  const searchBooks = async (): Promise<IBook[]> => {
    const response = await axios.get(
      'https://www.googleapis.com/books/v1/volumes?',
      {
        params: {
          q: props,
        },
      },
    );

    return response.data.items;
  };

  return useQuery({
    queryKey: [props + 'books'],
    queryFn: searchBooks,
    enabled: false,
  });
};

export default useSearch;
