import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../theme/colors/colors';
import {windowWidth} from '../../constants/ScreenSize/size';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  {
    id: 1,
    title: 'Islamic',
    img: require('../../assets/img/islamic.jpg'),
  },
  {
    id: 2,
    title: 'Mosque',
    img: require('../../assets/img/mosque.jpg'),
  },
  {
    id: 3,
    title: 'Space',
    img: require('../../assets/img/space.jpg'),
  },
  {
    id: 4,
    title: 'Cities',
    img: require('../../assets/img/islamic.jpg'),
  },
  {
    id: 5,
    title: 'Black and White',
    img: require('../../assets/img/black_and_white.jpg'),
  },
  {
    id: 6,
    title: 'Minimal',
    img: require('../../assets/img/minimal.jpg'),
  },
  {
    id: 7,
    title: 'Animals',
    img: require('../../assets/img/animals.jpg'),
  },
  {
    id: 8,
    title: 'Flowers',
    img: require('../../assets/img/flowers.jpg'),
  },
  {
    id: 9,
    title: 'Underwater',
    img: require('../../assets/img/underwater.jpg'),
  },
  {
    id: 10,
    title: 'Sky',
    img: require('../../assets/img/sky.jpg'),
  },
  {
    id: 11,
    title: 'Travel',
    img: require('../../assets/img/travel.jpg'),
  },
  {
    id: 12,
    title: 'Drones',
    img: require('../../assets/img/drones.jpg'),
  },
  {
    id: 13,
    title: 'Architecture',
    img: require('../../assets/img/architecture.jpg'),
  },
  {
    id: 14,
    title: 'Gradients',
    img: require('../../assets/img/gradients.jpg'),
  },
  {
    id: 15,
    title: 'Nature',
    img: require('../../assets/img/nature.jpg'),
  },
];

const CustomCategory = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setAnimating(true);
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ShimmerPlaceholder
            visible={animating}
            key={item.id}
            shimmerColors={['#7E7E7E', '#555555', '#696969']}
            style={styles.flatListView}>
            <TouchableOpacity>
              <ImageBackground
                source={item.img}
                style={styles.image}
                imageStyle={{opacity: 0.7}}>
                <Text style={styles.title}>{item.title}</Text>
              </ImageBackground>
            </TouchableOpacity>
          </ShimmerPlaceholder>
        )}
      />
    </View>
  );
};

export default CustomCategory;

const styles = StyleSheet.create({
  skeletonBox: {
    marginLeft: 7,
    display: 'flex',
    flexDirection: 'row',
  },

  skeleton: {
    margin: 10,
    borderRadius: 6,
  },

  container: {
    flex: 1,
  },
  flatList: {
    paddingRight: 2,
    paddingBottom: 100,
    width: windowWidth - 20,
  },
  flatListView: {
    margin: 8,
    height: 100,
    width: '45%',
    borderRadius: 4,
    borderColor: colors.white,
    borderWidth: 0.1,
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
  },
});
