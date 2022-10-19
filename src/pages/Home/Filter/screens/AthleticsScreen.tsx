import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../theme/colors/colors';

const AthleticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>AthleticsScreen</Text>
    </View>
  );
};

export default AthleticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgApp,
  },
});
