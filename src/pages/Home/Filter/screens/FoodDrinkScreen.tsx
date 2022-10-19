import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../theme/colors/colors';

const FoodDrinkScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>FoodDrinkScreen</Text>
    </View>
  );
};

export default FoodDrinkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgApp,
  },
});
