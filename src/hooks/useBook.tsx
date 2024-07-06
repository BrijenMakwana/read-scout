import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const useBook = (props: string) => {
  const getBook = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${props}`,
    );

    return response.data;
  };

  return useQuery({
    queryKey: [props + 'book details'],
    queryFn: getBook,
  });
};

export default useBook;
