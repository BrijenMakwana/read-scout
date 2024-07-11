import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SegmentedButtons from '../components/SegmentedButtons';
import useBookShelves from '../store';
import BookShelfItem from '../components/BookShelfItem';
import GoBack from '../components/GoBack';
import Divider from '../components/Divider';

const BookShelvesScreen = () => {
  const [selectedBtn, setSelectedBtn] = useState('read');

  const {books} = useBookShelves();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <GoBack />
        <SegmentedButtons
          buttons={['want to read', 'read', 'currently reading']}
          value={selectedBtn}
          setValue={setSelectedBtn}
        />
      </View>

      <FlatList
        data={books}
        renderItem={({item}) => <BookShelfItem bookId={item} />}
        keyExtractor={item => item}
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
