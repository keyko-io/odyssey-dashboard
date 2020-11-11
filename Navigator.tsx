import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from './Dashboard'
import { DetailsList } from './DetailsList'
import { DetailsItem } from './DetailsItem'
import { Register } from './Register'
import { LogoTitle } from './Header'

const MainStack = createStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode='float'>
        <MainStack.Screen name="dashboard" component={Dashboard} options={{headerTitle: props => <LogoTitle/>}}/>
        <MainStack.Screen name="detailsList" component={DetailsList} options={{headerTitle: props => <LogoTitle/>}}/>
        <MainStack.Screen name="detailsItem" component={DetailsItem} options={{headerTitle: props => <LogoTitle/>}}/>
        <MainStack.Screen name="register" component={Register} options={{headerTitle: props => <LogoTitle/>}}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;