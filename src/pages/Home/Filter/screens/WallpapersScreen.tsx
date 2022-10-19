import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../theme/colors/colors';

const WallpapersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>WallpapersScreen</Text>
    </View>
  );
};

export default WallpapersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgApp,
  },
});
