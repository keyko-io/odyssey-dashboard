import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { IconButton, Subheading } from 'react-native-paper'

interface Props {
  completed?: boolean
  first?: boolean
  recipient?: string
  last?: boolean
  navigation: any
}

export class DetailsItemStep extends React.Component<Props> {
  render() {
    const {completed, first, recipient, last} = this.props
    const [color, backgroundColor] = completed ? ['#ffffff', 'transparent'] : ['#130F28', '#888888']
    const icon = completed ? 'check' : last ? 'thumb-up' : 'calendar'
    return (
      <View style={[styles.container, completed ? styles.containerCompleted : {}]}>
        <IconButton
          style={[{backgroundColor}, styles.icon]}
          icon={icon}
          color={color}
          size={30}
          onPress={() => this.props.navigation.navigate('status')} />
        <Subheading style={[styles.text, completed ? styles.textCompleted : {}]}>
          {first ? 'PACKAGE REGISTERED' : `PACKAGED RECEIVED ${recipient}`}
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
