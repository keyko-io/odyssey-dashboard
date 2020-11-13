import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Button as PButton, shadow } from 'react-native-paper';

export const Button: typeof PButton = function(props) {
  const {children} = props

  return (
    <View style={styles.container}>
      <PButton
        {...props}
        mode="contained"
        style={[props.style, styles.button]}>

        {children}
      </PButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 24,
  },
  button: {
    ...shadow(4) as any,
    height: 48,
    lineHeight: 46,
    borderRadius: 24,
    display: 'flex',
    justifyContent: 'center',
  },
})
