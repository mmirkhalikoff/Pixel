import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, shimmerColors} from '../../theme/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const FlatListScreen = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  const DATA = [
    {
      id: 1,
      title: 'index',
    },
    {
      id: 2,
      title: 'index',
    },
    {
      id: 3,
      title: 'index',
    },
    {
      id: 4,
      title: 'index',
    },
    {
      id: 5,
      title: 'index',
    },
    {
      id: 6,
      title: 'index',
    },
    {
      id: 7,
      title: 'index',
    },
    {
      id: 8,
      title: 'index',
    },
    {
      id: 9,
      title: 'index',
    },
    {
      id: 10,
      title: 'index',
    },
    {
      id: 11,
      title: 'index',
    },
    {
      id: 12,
      title: 'index',
    },
    {
      id: 13,
      title: 'index',
    },
    {
      id: 14,
      title: 'index',
    },
    {
      id: 15,
      title: 'index',
    },
    {
      id: 16,
      title: 'index',
    },
  ];

  const [animating, setAnimating] = useState(false);

  setTimeout(() => {
    setAnimating(true);
  }, 1000);

  return (
    <View>
      <FlatList
        numColumns={2}
        data={DATA}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ShimmerPlaceholder
            visible={animating}
            key={item.id}
            shimmerColors={shimmerColors}
            style={styles.box}>
            <Text style={{color: 'white'}}>{item.title}</Text>
          </ShimmerPlaceholder>
        )}
        contentContainerStyle={styles.flatStyle}
      />
    </View>
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({
  skeletonBox: {
    marginLeft: 2,
    display: 'flex',
    flexDirection: 'row',
  },

  container: {
    flex: 1,
  },

  flatStyle: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingBottom: 70,
  },
  box: {
    height: 200,
    width: '49%',
    margin: 1,
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.imperialPrimer,
  },
});
