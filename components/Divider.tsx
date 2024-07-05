import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = () => {
  return <View style={styles.container} />;
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: '#fff',
    width: '95%',
    alignSelf: 'center',
    marginVertical: 5,
  },
});
