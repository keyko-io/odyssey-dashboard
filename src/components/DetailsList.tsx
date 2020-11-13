import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Subheading } from 'react-native-paper';

import { Title } from '../ui';

enum DeliveryState {
  Active = 'In Transit',
  Ok = 'Delivered',
  Error = 'Problem Detected',
}

//Get this data calling on chain or to the metadata-api
export const listItems = [
  {
    did: 'did:nvm:0123456789012345678901234567890123456789',
    description: 'Robin delivery',
    state: DeliveryState.Active,
  x: 13.421375,
  y: 52.492450,
    destination: 'Berlin'
  },
  {
    did: 'did:nvm:1111111111111111111111111111111111111111',
    description: 'Dave delivery',
    state: DeliveryState.Ok,
  x: -4.435115,
  y: 36.7197404,
    destination: 'Malaga'
  },
];

interface Props {
  navigation: any
}

export class DetailsList extends React.Component<Props> {

  cutDid(did: string) {
    return did.replace(/^(\w+:\w+:[a-f0-9]{8}).+([a-f0-9]{8})$/i, '$1...$2')
  }

  getStateStyle(state: DeliveryState) {
    switch (state) {
      case DeliveryState.Ok: return styles.statusOk
      case DeliveryState.Error: return styles.statusError
      case DeliveryState.Active: return styles.statusActive
    }
  }

  render() {
    return (
      <View>
        <Title>Your packages</Title>
        <View>
          {listItems.map(item => (
            <TouchableOpacity
              key={item.did}
              onPress={() => this.props.navigation.navigate('detailsItem', item)}>

              <View style={styles.item}>
                <View>
                  <Text style={styles.textMono}>DID: {this.cutDid(item.did)}</Text>
                  <Subheading>{item.description}</Subheading>
                  <Subheading style={styles.textSubAlt}>
                    State: {' '}
                    <Text style={this.getStateStyle(item.state)}>
                      {item.state}
                    </Text>
                  </Subheading>
                </View>
                <View>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.83331 22.6962L15.1347 12.9773L4.83331 3.25827L8.0047 0.272705L21.5 12.9773L8.0047 25.6818L4.83331 22.6962Z" fill="black" fillOpacity="0.54"/>
                  </svg>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  item: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textMono: {
    fontFamily: 'monospace',
    fontSize: 14,
    marginBottom: 4,
  },
  textSubAlt: {
    color: 'color: rgba(0, 0, 0, 0.6)',
    lineHeight: 20,
  },

  statusOk: {
    color: '#2A9D8F',
  },
  statusError: {
    color: '#FF0C3E',
  },
  statusActive: {
    color: '#7C02F3',
  },
})
