import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const Book = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://m.media-amazon.com/images/I/413za4fzZLL.jpg',
        }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.title}>clean code</Text>

        <Text style={styles.author}>Robert Cecil Martin</Text>
      </View>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    gap: 20,
  },
  image: {
    width: 220,
    height: 300,
    borderRadius: 5,
  },
  info: {
    gap: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  author: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
});
