import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {windowWidth} from '../../constants/ScreenSize/size';
import {colors} from '../../theme/colors/colors';
import PixelIcon from '../../assets/icons/general/Pixel';

const Header = () => {
  return (
    <View style={styles.container}>
      <PixelIcon size={40} />
      <Text style={styles.text}>Pixel</Text>
      <View />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginBottom: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    flexDirection: 'row',
    width: windowWidth - 40,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.white,
    letterSpacing: 3,
    marginRight: 40,
  },
});
