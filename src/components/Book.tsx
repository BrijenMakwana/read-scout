import React from 'react';
import {View, Image, StyleSheet, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface IBook {
  id: string;
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
  const {
    id,
    title,
    imageLinks,
    pageCount,
    authors,
    averageRating,
    description,
  } = props;

  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('Book', {
          bookId: id,
        })
      }>
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
            source={require('../../assets/images/star.png')}
            style={styles.star}
          />
          <Text style={styles.rating}>{averageRating || 'NA'}</Text>
        </View>

        <Text style={styles.pages}>{pageCount} pages</Text>

        <Text style={styles.description} numberOfLines={5}>
          {description}
        </Text>
      </View>
    </Pressable>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    gap: 20,
    cursor: 'pointer',
  },
  image: {
    width: 200,
    height: 270,
    borderRadius: 5,
  },
  info: {
    gap: 12,
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: '#000',
  },
  author: {
    fontSize: 16,
    textTransform: 'capitalize',
    color: '#686D76',
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
  pages: {
    fontSize: 15,
    color: '#000',
  },
  description: {
    fontSize: 15,
    color: '#000',
  },
});
