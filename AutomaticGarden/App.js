import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen.js';
import HomeScreen from './Home.js'; 
import ConfigurationsScreen from './Configurations.js'; 

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Configurations" component={ConfigurationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
