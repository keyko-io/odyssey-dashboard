import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from './src/components/Dashboard'
import { DetailsList } from './src/components/DetailsList'
import { DetailsItem } from './src/components/DetailsItem'
import { Register } from './src/components/Register'
import { LogoTitle } from './src/components/Header'
import { CameraView } from './src/components/CameraView'

const MainStack = createStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode='float'>
        <MainStack.Screen name="dashboard" component={Dashboard} options={{headerTitle: props => <LogoTitle/>}}/>
        <MainStack.Screen name="detailsList" component={DetailsList} options={{headerTitle: props => <LogoTitle/>}}/>
        <MainStack.Screen name="detailsItem" component={DetailsItem} options={{headerTitle: props => <LogoTitle/>}}/>
        <MainStack.Screen name="register" component={Register} options={{headerTitle: props => <LogoTitle/>}}/>
        <MainStack.Screen name="camera" component={CameraView} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;