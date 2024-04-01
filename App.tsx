import React from 'react';
import { Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Theme } from './src/utils/theme';
import HomeScreen from './src/screens/HomeScreen';
import CountdownScreen from './src/screens/CountdownScreen';
import WorldclockScreen from './src/screens/WorldclockScreen';


const Stack = createStackNavigator();

function App(): React.JSX.Element {

  return (
      <NavigationContainer theme={Theme}>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CountdownScreen" component={CountdownScreen} />
          <Stack.Screen name="WorldclockScreen" component={WorldclockScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
