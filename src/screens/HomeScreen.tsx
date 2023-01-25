import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import SearchBox from '../components/SearchBox';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={styles.root_container}>
      <View style={styles.img_container}>
        <Image
          source={require('../../assets/season.png')}
          resizeMode="cover"
          style={styles.img}
        />
      </View>
      <Text style={styles.title_text}>Welcome To Splash </Text>
      <SearchBox />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root_container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    paddingTop: 10,
  },
  img_container: {
    width: 90,
    height: 90,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 8,
  },
});
