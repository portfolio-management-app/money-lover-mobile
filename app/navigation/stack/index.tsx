import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Home, Start, Register } from 'screens';
import { screenName } from 'navigation/screen-names';
import { colorScheme } from 'styles';

const Stack = createNativeStackNavigator();

export const NavigationStack = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={colorScheme.white}
        barStyle={'dark-content'}
      />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={screenName.start}
      >
        <Stack.Screen name={screenName.start} component={Start} />
        <Stack.Screen name={screenName.home} component={Home} />
        <Stack.Screen name={screenName.login} component={Login} />
        <Stack.Screen name={screenName.register} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
