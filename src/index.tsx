import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes/routes';
import HomeScreen from './pages/Home/HomeScreen';
import BottomNavigation from './components/BottomTabNavigation';
import VideoScreen from './pages/Video/VideoScreen';
import SearchScreen from './pages/Search/SearchScreen';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.BOTTOM_PATH} component={BottomNavigation} />
        <Stack.Screen name={routes.HOME_PATH} component={HomeScreen} />
        <Stack.Screen name={routes.VIDEO} component={VideoScreen} />
        <Stack.Screen name={routes.SEARCH} component={SearchScreen} />
        {/* <Stack.Screen name={routes.} component={} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
