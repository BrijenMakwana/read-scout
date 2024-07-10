import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const GoBack = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.btn}>
      <Text style={styles.text}>back</Text>
    </Pressable>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#4ecdc4',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
  text: {
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: '500',
  },
});
