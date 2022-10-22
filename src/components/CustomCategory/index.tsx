import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors, shimmerColors} from '../../theme/colors/colors';
import {windowWidth} from '../../constants/ScreenSize/size';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const CustomCategory = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  const customCategoryData = [
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
      title: 'Nature',
      img: require('../../assets/img/nature.jpg'),
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
  ];

  const [animating, setAnimating] = useState(false);

  setTimeout(() => {
    setAnimating(true);
  }, 1000);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={customCategoryData}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ShimmerPlaceholder
            visible={animating}
            key={item.id}
            shimmerColors={shimmerColors}
            style={styles.flatListView}>
            <TouchableOpacity activeOpacity={0.7}>
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
    borderRadius: 4,
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
    height: 135,
    width: '45%',
    borderRadius: 4,
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
