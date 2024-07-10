import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SegmentedButtons from '../components/SegmentedButtons';

const BookShelvesScreen = () => {
  const [selectedBtn, setSelectedBtn] = useState('read');

  return (
    <View style={styles.container}>
      <SegmentedButtons
        buttons={['want to read', 'read', 'currently reading']}
        value={selectedBtn}
        setValue={setSelectedBtn}
      />
    </View>
  );
};

export default BookShelvesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#292f36',
  },
});
