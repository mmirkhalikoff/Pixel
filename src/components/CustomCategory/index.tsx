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
import Skeleton from '../Skeleton';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [loading]);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={{marginTop: 30}}>
          <View style={styles.skeletonBox}>
            <Skeleton style={styles.skeleton} width="44%" height={100} />
            <Skeleton style={styles.skeleton} width="44%" height={100} />
          </View>
          <View style={styles.skeletonBox}>
            <Skeleton style={styles.skeleton} width="44%" height={100} />
            <Skeleton style={styles.skeleton} width="44%" height={100} />
          </View>
          <View style={styles.skeletonBox}>
            <Skeleton style={styles.skeleton} width="44%" height={100} />
            <Skeleton style={styles.skeleton} width="44%" height={100} />
          </View>
          <View style={styles.skeletonBox}>
            <Skeleton style={styles.skeleton} width="44%" height={100} />
            <Skeleton style={styles.skeleton} width="44%" height={100} />
          </View>
        </View>
      ) : (
        <FlatList
          numColumns={2}
          data={data}
          contentContainerStyle={styles.flatList}
          renderItem={({item}) => (
            <TouchableOpacity key={item.id} style={styles.flatListView}>
              <ImageBackground
                source={item.img}
                style={styles.image}
                imageStyle={{opacity: 0.5}}>
                <Text style={styles.title}>{item.title}</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      )}
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
    marginTop: 30,
    paddingRight: 2,
    paddingBottom: 100,
    width: windowWidth - 20,
  },
  flatListView: {
    margin: 10,
    height: 100,
    width: '45%',
    borderRadius: 6,
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
