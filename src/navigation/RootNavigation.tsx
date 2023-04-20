import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Splash } from '@screens/index';
import { RootStackParamList } from './types';
import { TabStack } from './TabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name='Splash'
          component={Splash}
        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name='Login'
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: 'fade'
          }}
          name='HomeStack'
          component={TabStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
