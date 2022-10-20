import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../../components/Header';
import {routes} from '../../../routes/routes';
import {colors} from '../../../theme/colors/colors';
import VideoScreen from '../VideoScreen';
import AnimalScreens from './screens/AnimalsScreens';
import CarsScreen from './screens/CarsScreens';
import GirlScreen from './screens/GirlsScreen';
import TechnologyScreen from './screens/TechnologysScreen';

const Tab = createMaterialTopTabNavigator();

const VideoFilter = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.lightyalow,
          tabBarInactiveTintColor: colors.white,
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            backgroundColor: colors.lightyalow,
          },
          tabBarStyle: {
            backgroundColor: colors.bgApp,
          },
          tabBarItemStyle: {
            width: 'auto',
          },
          tabBarLabelStyle: {
            fontSize: 18,
            letterSpacing: 0.6,
            fontWeight: '500',
            textTransform: 'capitalize',
          },
        }}>
        <Tab.Screen
          name={routes.VIDEO}
          component={VideoScreen}
          options={{tabBarLabel: 'All'}}
        />
        <Tab.Screen
          name={routes.VIDEO_TECHNOLOGY}
          component={TechnologyScreen}
          options={{tabBarLabel: 'Technology'}}
        />
        <Tab.Screen
          name={routes.VIDEO_ANIMAL}
          component={AnimalScreens}
          options={{tabBarLabel: 'Animal'}}
        />
        <Tab.Screen
          name={routes.VIDEO_GIRL}
          component={GirlScreen}
          options={{tabBarLabel: 'Girl'}}
        />
        <Tab.Screen
          name={routes.VIDEO_CARS}
          component={CarsScreen}
          options={{tabBarLabel: 'Car'}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default VideoFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgApp,
  },
});
