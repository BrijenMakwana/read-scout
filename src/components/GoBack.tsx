import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const GoBack = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.btn}>
      <Icon name="arrow-back-circle" size={50} color="#4ecdc4" />
    </Pressable>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  btn: {
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
});
