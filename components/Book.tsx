import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

interface IBook {
  title: string;
  authors: string[];
  averageRating: number;
  description: string;
  imageLinks: {
    thumbnail: string;
  };
  pageCount: number;
}

const Book = (props: IBook) => {
  const {title, description, imageLinks, pageCount, authors, averageRating} =
    props;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            imageLinks?.thumbnail ||
            'https://m.media-amazon.com/images/I/41zoxjP9lcL._AC_SY200_QL15_.jpg',
        }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.author}>{(authors && authors[0]) || 'NA'}</Text>

        <View style={styles.ratingContainer}>
          <Image
            source={require('../assets/images/star.png')}
            style={styles.star}
          />
          <Text style={styles.rating}>{averageRating || 'NA'}</Text>
        </View>

        <Text style={styles.description} numberOfLines={5}>
          {description}
        </Text>

        <Text style={styles.pages}>{pageCount} pages</Text>
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
    color: '#000',
  },
  author: {
    fontSize: 18,
    textTransform: 'capitalize',
    color: '#fca311',
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
    color: '#000',
  },
  description: {
    fontSize: 15,
    color: '#686D76',
  },
  pages: {
    fontSize: 15,
    color: '#000',
  },
});
