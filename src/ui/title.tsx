import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Title as PTitle } from 'react-native-paper';


interface Props {
  children: any
}

export class Title extends React.Component<Props> {
  render() {
    const {children} = this.props

    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <PTitle style={styles.text}>{children}</PTitle>
          <View style={styles.line}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
  },
  wrapper: {
  },
  text: {
    fontSize: 20,
    color: '#7C02F3',
    paddingBottom: 8,
    fontWeight: '600',
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#D7B7FD',
  },
})
