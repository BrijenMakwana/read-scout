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

        <View style={styles.ratingContainer}>
          <Image
            source={require('../assets/images/star.png')}
            style={styles.star}
          />
          <Text style={styles.rating}>4.5</Text>
        </View>

        <Text style={styles.description}>
          Even bad code can function. But if code isn’t clean, it can bring a
          development organization to its knees. Every year, countless hours and
          significant resources are lost because of poorly written code. But it
          doesn’t have to be that way.
        </Text>

        <Text style={styles.pages}>400 pages</Text>
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
    gap: 15,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  author: {
    fontSize: 18,
    textTransform: 'capitalize',
    color: '#8ecae6',
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  star: {
    width: 25,
    height: 25,
  },
  rating: {
    fontSize: 15,
    fontWeight: '500',
  },
  description: {
    fontSize: 15,
    color: '#adb5bd',
  },
  pages: {
    fontSize: 15,
  },
});
