import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SegmentedButtons from '../components/SegmentedButtons';
import useBookShelves from '../store';
import BookShelfItem from '../components/BookShelfItem';
import GoBack from '../components/GoBack';
import Divider from '../components/Divider';
import {BookShelves} from '../types';

const BookShelvesScreen = () => {
  const [selectedBookShelf, setSelectedBookShelf] = useState(BookShelves.Read);

  const {books} = useBookShelves();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <GoBack />
        <SegmentedButtons
          buttons={[
            {
              label: 'want to read',
              value: BookShelves.WantToRead,
            },
            {
              label: 'read',
              value: BookShelves.Read,
            },
            {
              label: 'currently reading',
              value: BookShelves.CurrentlyReading,
            },
          ]}
          value={selectedBookShelf}
          setValue={setSelectedBookShelf}
        />
      </View>

      <FlatList
        data={books.filter(item => item.bookShelfId === selectedBookShelf)}
        renderItem={({item}) => <BookShelfItem {...item} />}
        keyExtractor={item => item.bookId}
        ItemSeparatorComponent={Divider}
        contentContainerStyle={{
          gap: 5,
          padding: 10,
        }}
      />
    </View>
  );
};

export default BookShelvesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292f36',
  },
  topContainer: {
    padding: 20,
    gap: 15,
  },
});
