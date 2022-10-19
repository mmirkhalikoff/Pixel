import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../theme/colors/colors';
import VirtualizedScrollList from '../../../../components/VirtualizedScrollList';

const EditorialScreen = () => {
  return (
    <View style={styles.container}>
      <VirtualizedScrollList />
    </View>
  );
};

export default EditorialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgApp,
  },
});
