import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Map } from '../ui';
import { cutDid, getStateStyle } from '../shared'
import { Qr } from '../ui';

interface Props {
  route: any,
  navigation: any
}

export class DetailsItem extends React.Component<Props> {
  render() {
    const {did, name,  description, state, destination, x, y} = this.props.route.params
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
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
        </ScrollView>
        <Map
          latitude={x}
          longitude={y}
          latitudeDelta={0.0922}
          longitudeDelta={0.0421}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
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
