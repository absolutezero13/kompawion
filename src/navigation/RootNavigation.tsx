import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Splash } from '@screens/index';
import { RootStackParamList } from './types';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;