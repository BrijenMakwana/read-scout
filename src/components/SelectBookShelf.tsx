import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import useBookShelves from '../store';
import {BookShelves} from '../types';

interface ISelectBookShelf {
  bookId: string;
}

export const BOOK_SHELVES = [
  {label: 'Want to Read', value: BookShelves.WantToRead},
  {label: 'Read', value: BookShelves.Read},
  {label: 'Currently Reading', value: BookShelves.CurrentlyReading},
];

const TickIcon = () => <Icon name="check" size={25} color="#4ecdc4" />;

const SelectBookShelf = (props: ISelectBookShelf) => {
  const {bookId} = props;

  const {addBook, updateBook, books} = useBookShelves();

  const book = books.find(item => item.bookId === bookId);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(book?.bookShelfId);
  const [items, setItems] = useState(BOOK_SHELVES);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      onChangeValue={bookShelfId =>
        book
          ? updateBook(bookId, bookShelfId as BookShelves)
          : addBook(bookId, bookShelfId as BookShelves)
      }
      setItems={setItems}
      listMode="SCROLLVIEW"
      containerStyle={styles.container}
      placeholder="Add to Bookshelf"
      TickIconComponent={TickIcon}
    />
  );
};

export default SelectBookShelf;

const styles = StyleSheet.create({
  container: {
    width: 300,
    cursor: 'pointer',
  },
});
