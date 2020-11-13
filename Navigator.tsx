import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from './src/components/Dashboard'
import { DetailsList } from './src/components/DetailsList'
import { DetailsItem } from './src/components/DetailsItem'
import { Register } from './src/components/Register'
import { LogoTitle } from './src/components/Header'
import { CameraView } from './Camera/CameraView'

const screens = [
  {name: 'dashboard', component: Dashboard},
  {name: 'detailsList', component: DetailsList},
  {name: 'detailsItem', component: DetailsItem},
  {name: 'register', component: Register},
  {name: 'camera', component: CameraView},
]

const MainStack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode='float' screenOptions={{cardStyle: {backgroundColor: '#ffffff'}}}>
        {screens.map(props => (
          <MainStack.Screen
            {...props}
            options={{headerTitle: props => <LogoTitle/>}} />
        ))}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
