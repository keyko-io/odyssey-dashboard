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
import { ItemStatus } from './src/components/ItemStatus'

const screens = [
  {name: 'status', component: ItemStatus},
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
            key={props.name}
            {...props}
            options={{headerTitle: props => <LogoTitle/>}} />
        ))}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
