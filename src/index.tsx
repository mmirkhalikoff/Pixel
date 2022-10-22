import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes/routes';
import BottomNavigation from './components/BottomTabNavigation';
import VideoScreen from './pages/Video/VideoScreen';
import SearchScreen from './pages/Search/SearchScreen';
import PhotoScreen from './pages/Photo/PhotoScreen';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.BOTTOM_PATH} component={BottomNavigation} />
        <Stack.Screen name={routes.PHOTO} component={PhotoScreen} />
        <Stack.Screen name={routes.VIDEO} component={VideoScreen} />
        <Stack.Screen name={routes.SEARCH} component={SearchScreen} />
        {/* <Stack.Screen name={routes.} component={} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
