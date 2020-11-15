import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context } from './context'
import ContextProvider from './context/ContextProvider'
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from './Navigator'

export default function App() {
  return (
    <PaperProvider>
    <ContextProvider>
      <Context.Consumer>
        {states =>
          states.isLoading ? (
            <Text>{states.message}</Text>
          ) : (
            <Navigator></Navigator>
          )
        }
      </Context.Consumer>
    </ContextProvider>
  </PaperProvider>
  );
}
