import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import { Context } from '../../context';
import { Map, Qr, Button } from '../ui';
import { cutDid, getStateStyle } from '../shared'

import { DetailsItemStep } from './DetailsItemStep'

interface Props {
  route: any,
  navigation: any
}

export class DetailsItem extends React.Component<Props> {
  public static contextType = Context

  render() {
    const {did, name, state, destination, events} = this.props.route.params
    console.log(this.props.route.params)

    const {company} = this.context
    
    let coordinates 
    if (company === 'MSD'){
      coordinates = [[4.7683,52.3105]]
    }
    else {
      coordinates = [[4.7683,52.3105], [4.8683,52.3105]]
    }
    // const nextCompany = events.find(({completed}: any) => !completed)?.owner
    // const route = events
    //   .filter(({location}: any) => !!location)
    //   .map(({location: {latitude, longitude}}: any) => [longitude, latitude])
    return (
      <View style={styles.container}>
        <ScrollView style={[styles.container]}>
          <View style={[styles.container, styles.scroll]}>
            <View style={styles.info}>
              <View style={styles.infoText}>
                <Text style={styles.header}>{name}</Text>
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
              latitude={52.3105}
              longitude={4.7683}
              coordinatesRoute={coordinates}
              latitudeDelta={0.0922}
              longitudeDelta={0.0421}
              height="200"/>
            <View>
              {events.map((event:any, i:number) => (
                <DetailsItemStep
                  key={i}
                  first={i === 0}
                  last={i === events.length - 1}
                  recipient={'by'}
                  completed={true} />
              ))}
            </View>
          </View>
        </ScrollView>

        <Button
          icon="magnify"
          // disabled={company !== nextCompany}
          onPress={() => this.props.navigation.navigate('register', {did, name})} >

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
