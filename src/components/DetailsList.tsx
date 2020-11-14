import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Subheading } from 'react-native-paper';
import { Context } from '../../context';

import { Title, Button } from '../ui';
import { DeliveryState, cutDid, getStateStyle } from '../shared';

//Get this data calling on chain or to the metadata-api
export const listItems = [
  {
    did: 'did:nvm:0123456789012345678901234567890123456789',
    name: 'Food',
    description: 'Robin delivery',
    state: DeliveryState.Active,
    longitude: 13.421375,
    latitude: 52.492450,
    destination: 'Berlin',
    steps: [
      {id: 0, completed: true, location: {longitude: 13.421375, latitude: 52.492450}},
      {id: 1, completed: false, by: 'Checkpoint #1'},
      {id: 2, completed: false, by: 'Checkpoint #2'},
      {id: 3, completed: false, by: 'Final Recipient'},
    ],
  },
  {
    did: 'did:nvm:1111111111111111111111111111111111111111',
    name: 'Covid vaccines',
    description: 'Dave delivery',
    state: DeliveryState.Active,
    longitude: -4.435115,
    latitude: 36.7197404,
    destination: 'Malaga',
    steps: [
      {id: 0, completed: true, location: {longitude: -4.435115, latitude: 36.7197404}},
      {id: 1, completed: false, by: 'Checkpoint #1'},
      {id: 2, completed: false, by: 'Checkpoint #2'},
      {id: 3, completed: false, by: 'Final Recipient'},
    ],
  },
];

interface Props {
  navigation: any
}

export class DetailsList extends React.Component<Props> {
  public static contextType = Context

  render() {
    const {company} = this.context

    console.log(this.context)

    return (
      <View style={styles.container}>
        <ScrollView style={[styles.container]}>
          <View style={[styles.container, styles.scroll]}>
            <Title>Your packages</Title>
            <View>
              {listItems.map(item => (
                <TouchableOpacity
                  key={item.did}
                  onPress={() => this.props.navigation.navigate('detailsItem', item)}>

                  <View style={styles.item}>
                    <View>
                      <Text style={styles.textMono}>DID: {cutDid(item.did)}</Text>
                      <Subheading>{item.description}</Subheading>
                      <Subheading style={styles.textSubAlt}>
                        State: {' '}
                        <Text style={getStateStyle(item.state)}>
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
        </ScrollView>

        {company === 'MSD'
          ? (
            <Button
              icon="plus"
              onPress={() => this.props.navigation.navigate('register')} >

              Register package
            </Button>)
          : (
            <Button
              icon="magnify"
              onPress={() => this.props.navigation.navigate('camera')} >

              Inspect package
            </Button>
          )}
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
    color: '#D7B7FD',
  },
  statusRegistered: {
    color: '#7C02F3',
  }
})
