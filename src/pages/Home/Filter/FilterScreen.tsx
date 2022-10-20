import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {routes} from '../../../routes/routes';
import {colors} from '../../../theme/colors/colors';
import EditorialScreen from './screens/EditorialScreen';
import FoodDrinkScreen from './screens/FoodDrinkScreen';
import CurrentEventsScreens from './screens/CurrentEventsScreens';
import WallpapersScreen from './screens/WallpapersScreen';
import RenderScreen from './screens/RenderScreen';
import TexturesPatternsScreen from './screens/TexturesPatternsScreen';
import ExperimentalScreen from './screens/ExperimentalScreen';
import ArchitectureScreen from './screens/ArchitectureScreen';
import NatureScreen from './screens/NatureScreens';
import BusinessScreen from './screens/BusinessScreen';
import FashionScreen from './screens/FashionScreen';
import FilmScreen from './screens/FilmScreen';
import HealthScreen from './screens/HealthScreen';
import PeopleScreen from './screens/PeopleScreen';
import InteriorsScreen from './screens/InteriorsScreen';
import StreetPhotographyScreen from './screens/StreetPhotography';
import HistoryScreen from './screens/HistoryScreen';
import TravelScreen from './screens/TravelScreen';
import SpiritualityScreen from './screens/SpiritualityScreen';
import AthleticsScreen from './screens/AthleticsScreen';
import UzbekistanScreen from './screens/Uzbekistan';
import IslamicScreen from './screens/IslamicScreen';
import {View} from 'react-native';
import Header from '../../../components/Header';

const Tab = createMaterialTopTabNavigator();

const Filter = () => {
  return (
    <View style={{backgroundColor: colors.bgApp, flex: 1}}>
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
        {/* <Tab.Screen
        name={routes.HOME_PATH}
        component={HomeScreen}
        options={{tabBarLabel: 'All'}}
      /> */}
        <Tab.Screen
          name={routes.EDITORIAL}
          component={EditorialScreen}
          options={{tabBarLabel: 'Editor'}}
        />
        <Tab.Screen
          name={routes.ISLAMIC}
          component={IslamicScreen}
          options={{tabBarLabel: 'Islamic'}}
        />

        <Tab.Screen
          name={routes.UZBEKISTAN}
          component={UzbekistanScreen}
          options={{tabBarLabel: 'Uzbekistan'}}
        />
        <Tab.Screen
          name={routes.CURRENT_EVENT}
          component={CurrentEventsScreens}
          options={{tabBarLabel: 'Current Events'}}
        />
        <Tab.Screen
          name={routes.WALLPAPERS}
          component={WallpapersScreen}
          options={{tabBarLabel: 'Wallpapers'}}
        />
        <Tab.Screen
          name={routes.RENDER}
          component={RenderScreen}
          options={{
            tabBarLabel: '3D Renders',
          }}
        />
        <Tab.Screen
          name={routes.FOOD_DRINK}
          component={FoodDrinkScreen}
          options={{tabBarLabel: 'Food & Drink'}}
        />
        <Tab.Screen
          name={routes.TEXTURES_PATTERNS}
          component={TexturesPatternsScreen}
          options={{tabBarLabel: 'Textures & Patterns'}}
        />
        <Tab.Screen
          name={routes.EXPERIMENTAL}
          component={ExperimentalScreen}
          options={{tabBarLabel: 'Experimental'}}
        />
        <Tab.Screen
          name={routes.ARCHITECTURE}
          component={ArchitectureScreen}
          options={{tabBarLabel: 'Architecture'}}
        />
        <Tab.Screen
          name={routes.NATURE}
          component={NatureScreen}
          options={{tabBarLabel: 'Nature'}}
        />
        <Tab.Screen
          name={routes.BUSINESS}
          component={BusinessScreen}
          options={{tabBarLabel: 'Business & Work'}}
        />
        <Tab.Screen
          name={routes.FASHION}
          component={FashionScreen}
          options={{tabBarLabel: 'Fashion'}}
        />
        <Tab.Screen
          name={routes.FILM}
          component={FilmScreen}
          options={{tabBarLabel: 'Film'}}
        />
        <Tab.Screen
          name={routes.HEALTH}
          component={HealthScreen}
          options={{tabBarLabel: 'Health & Wellness'}}
        />
        <Tab.Screen
          name={routes.PEOPLE}
          component={PeopleScreen}
          options={{tabBarLabel: 'People'}}
        />
        <Tab.Screen
          name={routes.INTERIORS}
          component={InteriorsScreen}
          options={{tabBarLabel: 'Interiors'}}
        />
        <Tab.Screen
          name={routes.STREET_PHOTOGRAPHY}
          component={StreetPhotographyScreen}
          options={{tabBarLabel: 'Street & Photography'}}
        />
        <Tab.Screen
          name={routes.HISTORY}
          component={HistoryScreen}
          options={{tabBarLabel: 'History'}}
        />
        <Tab.Screen
          name={routes.TRAVEL}
          component={TravelScreen}
          options={{tabBarLabel: 'Travel'}}
        />
        <Tab.Screen
          name={routes.SPIRITUALITY}
          component={SpiritualityScreen}
          options={{tabBarLabel: 'Spirituality'}}
        />
        <Tab.Screen
          name={routes.ATHLETICS}
          component={AthleticsScreen}
          options={{tabBarLabel: 'Athletics'}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Filter;
