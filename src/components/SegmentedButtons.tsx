import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {BookShelves} from '../types';

interface ISegmentedButton {
  label: string;
  value: BookShelves;
}

interface ISegmentedButtons {
  buttons: ISegmentedButton[];
  value: BookShelves;
  setValue: React.Dispatch<React.SetStateAction<BookShelves>>;
}

const SegmentedButtons = (props: ISegmentedButtons) => {
  const {buttons, value, setValue} = props;

  return (
    <View style={styles.container}>
      {buttons.map((btn, index) => (
        <Pressable
          key={index}
          style={[
            styles.btn,
            {
              backgroundColor: btn.value === value ? '#4ecdc4' : 'transparent',
            },
          ]}
          onPress={() => setValue(btn.value)}>
          <Text
            style={[
              styles.btnText,
              {
                color: btn.value === value ? '#000' : '#fff',
              },
            ]}>
            {btn.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default SegmentedButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    cursor: 'pointer',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4ecdc4',
    paddingVertical: 10,
    width: 170,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});
