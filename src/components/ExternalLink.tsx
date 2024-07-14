import React from 'react';
import {Text} from 'react-native';
import {Linking, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface IExternalLink {
  previewLink: string;
}

const ExternalLink = (props: IExternalLink) => {
  const {previewLink} = props;

  return (
    <Pressable
      onPress={async () => await Linking.openURL(previewLink)}
      style={styles.container}>
      <Text style={styles.text}>view</Text>
      <Icon name="external-link" size={22} color="#4ecdc4" />
    </Pressable>
  );
};

export default ExternalLink;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    gap: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#4ecdc4',
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});
