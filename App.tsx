import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigation from '@navigation/RootNavigation';

StatusBar.setBarStyle('light-content', true);

function App(): JSX.Element {
  return <RootNavigation />;
}

export default App;
