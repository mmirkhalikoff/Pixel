import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../theme/colors/colors';
import {windowWidth} from '../../../constants/ScreenSize/size';

const Content = ({item}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>index</Text>
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },

  box: {
    height: 100,
    width: 150,
    backgroundColor: colors.imperialPrimer,
  },
});
