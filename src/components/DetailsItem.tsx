import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import { Map, Qr, Button } from '../ui';
import { cutDid, getStateStyle } from '../shared'

import { DetailsItemStep } from './DetailsItemStep'

interface Props {
  route: any,
  navigation: any
}

export class DetailsItem extends React.Component<Props> {
  render() {
    const {did, name,  description, state, destination, steps, x, y} = this.props.route.params
    const onSubmit = (data: any) => console.log(data)

    return (
      <View style={styles.container}>
        <ScrollView style={[styles.container]}>
          <View style={[styles.container, styles.scroll]}>
            <View style={styles.info}>
              <View style={styles.infoText}>
                <Text style={styles.header}>{name || description}</Text>
                <Text style={styles.text}>DID: {cutDid(did)}</Text>
                <Text style={styles.text}>
                  State: {' '}
                  <Text style={getStateStyle(state)}>
                    {state}
                  </Text>
                </Text>
                <Text style={styles.text}>Destination: {destination}</Text>
              </View>
              <Qr size={100} value={did} />
            </View>
            <Map
              latitude={x}
              longitude={y}
              coordinatesRoute={[[13.421375,52.492450], [ 13.433375,52.498450], [ 13.433375,52.898450]]}
              latitudeDelta={0.0922}
              longitudeDelta={0.0421}
              height="200"/>
            <View>
              {steps.map(({id, completed, by}, i) => (
                <DetailsItemStep
                  key={id}
                  first={i === 0}
                  last={i === steps.length - 1}
                  recipient={by}
                  completed={completed} />
              ))}
            </View>
          </View>
        </ScrollView>
        <Button
        icon="plus"
        onPress={onSubmit}
        // disabled={!!Object.keys(errors).length || !name || !description}
        >

        Inspect package
      </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  scroll: {
    justifyContent: 'flex-start',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  infoText: {
    paddingRight: 16,
  },
  header: {
    fontWeight: '600',
    fontSize: 20,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
})
