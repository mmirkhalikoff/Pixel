import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../theme/colors/colors';
import {windowWidth} from '../../constants/ScreenSize/size';
import Skeleton from '../Skeleton';

const data = [
  {
    id: 1,
    title: 'Islamic',
  },
  {
    id: 2,
    title: 'Mosque',
  },
  {
    id: 3,
    title: 'Space',
  },
  {
    id: 4,
    title: 'Cities',
  },
  {
    id: 5,
    title: 'Black and White',
  },
  {
    id: 6,
    title: 'Minimal',
  },
  {
    id: 7,
    title: 'Animals',
  },
  {
    id: 8,
    title: 'Flowers',
  },
  {
    id: 9,
    title: 'Underwater',
  },
  {
    id: 10,
    title: 'Sky',
  },
  {
    id: 11,
    title: 'Travel',
  },
  {
    id: 12,
    title: 'Drones',
  },
  {
    id: 13,
    title: 'Architecture',
  },
  {
    id: 14,
    title: 'Gradients',
  },
  {
    id: 15,
    title: 'Nature',
  },
  {
    id: 16,
    title: 'Underwater',
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
              <Text>{item.title}</Text>
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
    display: 'flex',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black40,
  },
});
