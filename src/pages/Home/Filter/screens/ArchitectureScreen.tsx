import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../theme/colors/colors';

const ArchitectureScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>ArchitectureScreen</Text>
    </View>
  );
};

export default ArchitectureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgApp,
  },
});
