import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  HomeStack: undefined;
};

export type TabStackParamList = {
  Home: undefined;
  Search: undefined;
  Add: undefined;
  Reels: undefined;
  Profile: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type TabNavigationProp = NativeStackNavigationProp<TabStackParamList>;
