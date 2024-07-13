import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TickIcon = () => <Icon name="check" size={25} color="#4ecdc4" />;

const SelectBookShelf = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Want to Read', value: 0},
    {label: 'Read', value: 1},
    {label: 'Currently Reading', value: 2},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      listMode="SCROLLVIEW"
      containerStyle={styles.container}
      placeholder="Add to Bookshelf"
      TickIconComponent={TickIcon}
    />
  );
};

export default SelectBookShelf;

const styles = StyleSheet.create({
  container: {
    width: 300,
    cursor: 'pointer',
  },
});
