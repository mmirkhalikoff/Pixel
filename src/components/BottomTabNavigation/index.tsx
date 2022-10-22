import {View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../theme/colors/colors';
import {routes} from '../../routes/routes';
import GalleryIcon from '../../assets/icons/general/GalleryIcon/GalleryIcon';
import VideoIcon from '../../assets/icons/general/VideoIcon/VideoIcon';
import SearchIcon from '../../assets/icons/general/SearchIcon/SearchIcon';
import SearchScreen from '../../pages/Search/SearchScreen';
import Filter from '../../pages/Photo/Filter/FilterScreen';
import VideoFilter from '../../pages/Video/Filter/VideoFilterScreen';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          height: 50,
          zIndex: 1,
          backgroundColor: colors.bgApp,
          borderTopColor: colors.black,
          borderColor: colors.black,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <GalleryIcon
                size={30}
                stroke={focused ? colors.lightyalow : colors.white}
              />
            </View>
          ),
        }}
        name={routes.FILTER}
        component={Filter}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <VideoIcon
                size={30}
                stroke={focused ? colors.lightyalow : colors.white}
              />
            </View>
          ),
        }}
        name={routes.VIDEO_FILTER}
        component={VideoFilter}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <SearchIcon
                size={30}
                stroke={focused ? colors.lightyalow : colors.white}
              />
            </View>
          ),
        }}
        name={routes.SEARCH}
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
