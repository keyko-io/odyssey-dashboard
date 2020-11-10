import React from 'react';
import 'react-native-gesture-handler';
import { Button, Text, View, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from './Dashboard'
import { Details } from './Details'
import { CameraView } from './Camera/CameraView'

const MainStack = createStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="dashboard" component={Dashboard} />
        <MainStack.Screen name="details" component={Details} />
        <MainStack.Screen name="camera" component={CameraView} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;