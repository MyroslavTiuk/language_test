import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { TabNavigator } from './TabNavigator';

const screenOptions = {
  gestureEnabled: true,
  headerShown: false,
};

export const AppNavigator: React.FC = () => {
  const accessTok = true;
  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);

  const handleNavigationStack = React.useCallback(() => {
    if (true) {
      return <TabNavigator />;
    } else {
      return <TabNavigator />;
    }
  }, [accessTok]);

  return <NavigationContainer>{handleNavigationStack()}</NavigationContainer>;
};
