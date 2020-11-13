import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { IconButton, Subheading } from 'react-native-paper'

interface Props {
  completed?: boolean
  first?: boolean
  recipient?: string
  final?: string
}

export class DetailsItemStep extends React.Component<Props> {
  render() {
    const {completed, first, recipient, final} = this.props
    const [color, backgroundColor] = completed ? ['#ffffff', 'transparent'] : ['#130F28', '#888888']
    const icon = completed ? 'check' : final ? 'thumb-up' : 'calendar'
    return (
      <View style={[styles.container, completed ? styles.containerCompleted : {}]}>
        <IconButton
          style={[{backgroundColor}, styles.icon]}
          icon={icon}
          color={color}
          size={30}
          disabled />
        <Subheading style={[styles.text, completed ? styles.textCompleted : {}]}>
          {first ? 'PACKAGE REGISTERED' : `PACKAGED RECEIVED at ${recipient}`}
        </Subheading>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#E8E8E8'
  },
  containerCompleted: {
    backgroundColor: '#00E676'
  },
  text: {
    flex: 1,
    paddingLeft: 16,
    fontSize: 16,
  },
  textCompleted: {
    color: '#ffffff',
  },
  icon: {
    opacity: 1,
    margin: 0,
  },
})
