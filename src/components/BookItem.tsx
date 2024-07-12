import React from 'react';
import {View, Image, StyleSheet, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IBook} from '../types';
import Icon from 'react-native-vector-icons/AntDesign';

interface IBookItem extends IBook {
  isPressable?: boolean;
  isDescription?: boolean;
}

const BookItem = (props: IBookItem) => {
  const {id, volumeInfo, isPressable = true, isDescription = true} = props;
  const {title, imageLinks, pageCount, authors, averageRating, description} =
    volumeInfo;

  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('Book', {
          bookId: id,
        })
      }
      disabled={!isPressable}>
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

        <Text style={styles.author}>{authors.join(', ')}</Text>

        {averageRating && (
          <View style={styles.ratingContainer}>
            <Icon name="star" size={25} color="#FFEF00" />
            <Text style={styles.rating}>{averageRating}</Text>
          </View>
        )}

        <Text style={styles.pages}>{pageCount} pages</Text>

        {isDescription && (
          <Text style={styles.description} numberOfLines={5}>
            {description}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
    color: '#fff',
  },
  author: {
    fontSize: 16,
    textTransform: 'capitalize',
    color: '#4ecdc4',
    fontWeight: '500',
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
    color: '#fff',
  },
  pages: {
    fontSize: 15,
    color: '#fff',
  },
  description: {
    fontSize: 15,
    color: '#fff',
  },
});
