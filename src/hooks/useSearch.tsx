import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const useSearch = (props: string) => {
  const searchBooks = async () => {
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
