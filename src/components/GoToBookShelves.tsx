import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const GoToBookShelves = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('BookShelves')}
      style={styles.btn}>
      <Icon name="bookshelf" size={50} color="#4ecdc4" />
    </Pressable>
  );
};

export default GoToBookShelves;

const styles = StyleSheet.create({
  btn: {
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
});
