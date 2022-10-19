import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../theme/colors/colors';
import {windowWidth} from '../../constants/ScreenSize/size';
import Skeleton from '../Skeleton';

const VirtualizedScrollList = () => {
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <View>
      {loading ? (
        <View style={{marginTop: 10}}>
          <View style={styles.skeletonBox}>
            <Skeleton width="49%" height={200} />
            <Skeleton width="49%" height={200} />
          </View>
          <View style={styles.skeletonBox}>
            <Skeleton width="49%" height={200} />
            <Skeleton width="49%" height={200} />
          </View>
          <View style={styles.skeletonBox}>
            <Skeleton width="49%" height={200} />
            <Skeleton width="49%" height={200} />
          </View>
          <View style={styles.skeletonBox}>
            <Skeleton width="49%" height={200} />
            <Skeleton width="49%" height={200} />
          </View>
        </View>
      ) : (
        <FlatList
          numColumns={2}
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.box} key={item.id}>
              <Text>{item.title}</Text>
            </View>
          )}
          contentContainerStyle={styles.flatStyle}
        />
      )}
    </View>
  );
};

export default VirtualizedScrollList;

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
    paddingBottom: 100,
  },
  box: {
    height: 200,
    width: '49%',
    margin: 1,
    borderRadius: 2,
    backgroundColor: colors.imperialPrimer,
  },
  emptyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  emptyCard: {
    width: windowWidth / 2 - 30,
    height: 250,
    shadowOpacity: 0.2,
    borderRadius: 7.5,
    elevation: 2,
    marginLeft: 18,
    marginBottom: 10,
    // marginHorizontal: 3,
    backgroundColor: colors.white,
  },
});
