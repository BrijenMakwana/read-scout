import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Image} from 'react-native';

const GoBack = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.btn}>
      <Image
        source={require('../../assets/images/back.png')}
        style={styles.back}
      />
    </Pressable>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  btn: {
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
  back: {
    width: 50,
    height: 50,
  },
});
