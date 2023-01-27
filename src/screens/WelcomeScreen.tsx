import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import Indicator from '../components/Indicator';
import Backdrop from '../components/Backdrop';

const {width, height} = Dimensions.get('screen');

const DATA = [
  {
    key: '3571572',
    title: 'Multi-lateral intermediate moratorium',
    description:
      "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    image: 'https://cdn-icons-png.flaticon.com/512/4105/4105456.png',
  },
  {
    key: '3571747',
    title: 'Automated radical data-warehouse',
    description:
      'Use the optical SAS system, then you can navigate the auxiliary alarm!',
    image: 'https://cdn-icons-png.flaticon.com/512/4105/4105454.png',
  },
  {
    key: '3571680',
    title: 'Inverse attitude-oriented system engine',
    description:
      'The ADP array is down, compress the online sensor so we can input the HTTP panel!',
    image: 'https://cdn-icons-png.flaticon.com/512/4105/4105458.png',
  },
  {
    key: '3571603',
    title: 'Monitored global data-warehouse',
    description: 'We need to program the open-source IB interface!',
    image: 'https://cdn-icons-png.flaticon.com/512/4105/4105457.png',
  },
];

const WelcomeScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.root_container}>
      <Backdrop scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        horizontal
        contentContainerStyle={styles.content_style}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <View style={styles.inner_container}>
            <View style={styles.image_container}>
              <Image source={{uri: item.image}} style={styles.image} />
            </View>
            <View style={styles.text_container}>
              <Text style={styles.text_title}>{item.title}</Text>
              <Text style={styles.text_description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
      <Indicator data={DATA} scrollX={scrollX} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  root_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner_container: {
    width,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  content_style: {
    paddingBottom: 10,
  },
  image_container: {
    flex: 0.7,
  },
  image: {
    width: width / 2,
    height: height / 2,
    resizeMode: 'contain',
  },
  text_container: {
    flex: 0.3,
  },
  text_title: {
    fontWeight: '800',
    fontSize: 29,
    marginBottom: 10,
    color: 'white',
  },
  text_description: {
    fontWeight: '300',
    color: 'white',
  },
});
