import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@screens/Home/Home';
import { colors } from '@theme/colors';

import HomeIcon from '@assets/icons/home.svg';
import Search from '@assets/icons/search.svg';
import Add from '@assets/icons/add.svg';
import Profile from '@assets/icons/kompanion.svg';
import Reels from '@assets/icons/reels.svg';

import HomeFilled from '@assets/icons/home-filled.svg';
import ReelsFilled from '@assets/icons/reels-filled.svg';
import SearchFilled from '@assets/icons/search-filled.svg';
import HeartFilled from '@assets/icons/heart-filled.svg';

const getIcon = (name: string, focused: boolean) => {
  const routes = {
    Home: { icon: focused ? HomeFilled : HomeIcon },
    Search: { icon: focused ? SearchFilled : Search },
    Add: { icon: Add },
    Reels: { icon: focused ? ReelsFilled : Reels },
    Profile: { icon: Profile }
  } as { [key: string]: { icon: any; name?: string } };

  return routes[name].icon;
};

const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: () => null,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: StyleSheet.hairlineWidth
        },
        tabBarIcon: ({ focused }) => {
          const Icon = getIcon(route.name, focused);
          const color = focused ? colors.white : '';
          if (route.name === 'Profile') {
            return (
              <View
                style={{
                  borderColor: colors.white,
                  borderWidth: 1,
                  borderRadius: 20,
                  padding: 5
                }}
              >
                <Icon
                  width={15}
                  height={15}
                  style={{
                    color
                  }}
                />
              </View>
            );
          }

          return (
            <Icon
              width={25}
              height={25}
              style={{
                color
              }}
            />
          );
        }
      })}
      initialRouteName='Home'
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Search' component={Home} />
      <Tab.Screen name='Add' component={Home} />
      <Tab.Screen name='Reels' component={Home} />
      <Tab.Screen name='Profile' component={Home} />
    </Tab.Navigator>
  );
}

export { TabStack };
