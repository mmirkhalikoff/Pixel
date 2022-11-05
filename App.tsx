/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import AppRouter from './src';
import {colors} from './src/theme/colors/colors';
import {LogBox} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  const modeStyle = {
    backgroundColor: colors.bgApp,
  };

  return (
    <SafeAreaView style={[modeStyle, {flex: 1}]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppRouter />
    </SafeAreaView>
  );
};

export default App;
