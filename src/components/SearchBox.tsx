import React, {useRef} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

const SearchBox = () => {
  function onPressHandler() {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  }

  const inputRef: React.RefObject<TextInput> = useRef(null);

  return (
    <View style={styles.root_container}>
      {
        <Icons
          name="search"
          size={20}
          style={styles.icon}
          onPress={onPressHandler}
        />
      }
      <TextInput
        ref={inputRef}
        placeholder="Search City"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  root_container: {
    width: '85%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  icon: {
    paddingHorizontal: 8,
  },
  input: {
    width: '100%',
  },
});
