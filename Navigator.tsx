import React from 'react';
import 'react-native-gesture-handler';
import { Button, Text, View, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

class DashboardScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashboard screen</Text>
      </View>
    );
  }
}

const MainStack = createStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Dashboard" component={DashboardScreen} />
        <MainStack.Screen name="Details" component={DetailsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;