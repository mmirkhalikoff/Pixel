import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../theme/colors/colors';
import FlatListScreen from '../../../../components/FlatList';

const CarsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatListScreen />
    </View>
  );
};

export default CarsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgApp,
  },
});
