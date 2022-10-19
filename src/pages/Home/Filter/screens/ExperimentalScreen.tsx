import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../theme/colors/colors';

const ExperimentalScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>ExperimentalScreen</Text>
    </View>
  );
};

export default ExperimentalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgApp,
  },
});
