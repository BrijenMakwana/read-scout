import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  Linking,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import useBook from '../hooks/useBook';
import GoBack from '../components/GoBack';
import Book from '../components/Book';
import RenderHtml from 'react-native-render-html';

const BookScreen = () => {
  const route = useRoute();
  const {bookId} = route.params;

  const {width} = useWindowDimensions();

  const {data, isFetching, error} = useBook(bookId);

  if (isFetching) return <Text>Loading...</Text>;

  if (error) return <Text>Error</Text>;

  const {description, categories, previewLink} = data.volumeInfo;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        padding: 15,
        gap: 15,
      }}>
      <GoBack />

      <Book {...data.volumeInfo} />

      <View style={styles.categories}>
        {categories.map((category, index) => (
          <Text key={index} style={styles.category}>
            {category}
          </Text>
        ))}
      </View>

      <Pressable
        style={styles.viewBtn}
        onPress={async () => await Linking.openURL(previewLink)}>
        <Text style={styles.btnText}>view book</Text>
      </Pressable>

      <RenderHtml
        contentWidth={width}
        source={{
          html: description,
        }}
      />
    </ScrollView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF6F6',
    flex: 1,
  },
  categories: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  category: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 13,
    color: '#000',
  },
  viewBtn: {
    backgroundColor: '#2F3645',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    cursor: 'pointer',
  },
  btnText: {
    fontSize: 17,
    textTransform: 'capitalize',
    color: '#fff',
  },
});
