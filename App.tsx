import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Context } from './context'
import ContextProvider from './context/ContextProvider'
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from './Navigator'

export default function App() {
  console.log(Platform.OS)
  return (
    <>
      {Platform.OS === 'web' && (
        <style>{`
          html,
          body {
            height: 100%;
            background: #f5f5f5;
            box-sizing: border-box;
          }
          body {
            padding: 40px 0;
          }
          #root {
            width: 100%;
            max-width: 420px;
            height: 100%;
            min-height: 0;
            max-height: 800px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
            margin: auto;
            border-radius: 8px;
            background: #ffffff;
            overflow: hidden;
            box-sizing: border-box;
          }
        `}</style>
      )}
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
    </>
  );
}
