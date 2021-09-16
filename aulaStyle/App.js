import React from 'react';
import LotsOfStyles from './src';
import Detalhes from './src/components/Detalhes';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Home" component={LotsOfStyles} />
          <Stack.Screen name="Detalhes" component={Detalhes} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};
export default App;