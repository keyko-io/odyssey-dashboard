import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Subheading } from 'react-native-paper';
import { Context } from '../../context';
import { Title } from '../ui';
import { DeliveryState } from '../shared/types';

/*
//Get this data calling on chain or to the metadata-api
export const listItems = [
  {
    did: 'did:nvm:0123456789012345678901234567890123456789',
    description: 'Robin delivery',
    state: DeliveryState.Active,
    x: 13.421375,
    y: 52.492450,
    destination: 'Berlin',
    steps: [
      {id: 0, completed: true},
      {id: 1, completed: false, by: 'Checkpoint #1'},
      {id: 2, completed: false, by: 'Checkpoint #2'},
      {id: 3, completed: false, by: 'Final Recipient'},
    ],
  },
  {
    did: 'did:nvm:1111111111111111111111111111111111111111',
    description: 'Dave delivery',
    state: DeliveryState.Ok,
    x: -4.435115,
    y: 36.7197404,
    destination: 'Malaga',
    steps: [
      {id: 0, completed: true},
      {id: 1, completed: true, by: 'Checkpoint #1'},
      {id: 2, completed: false, by: 'Checkpoint #2'},
      {id: 3, completed: false, by: 'Final Recipient'},
    ],
  },
];
*/

interface State {
  packages: any[]
}

interface Props {
  navigation: any
}

export class DetailsList extends React.Component<Props, State> {
  public static contextType = Context
  state = {
    packages:[]
  }

  cutDid(did: string) {
    return did.replace(/^(\w+:\w+:[a-f0-9]{8}).+([a-f0-9]{8})$/i, '$1...$2')
  }

  componentDidMount() {
    this.loadPackages()
  }

  loadPackages = async() => {
    const events = await this.context.nevermined.keeper.provenanceRegistry.contract.getPastEvents("allEvents", {
      fromBlock: 0,
      toBlock: 'latest'
    })
    const packagesRequest = await fetch("https://metadata.keyko.rocks/api/v1/metadata/assets", {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    const listOfPackages = await packagesRequest.json()
    const packages: any[] = []
    for(const id of listOfPackages.ids){
      let addIn = false
      const packageData = await fetch("https://metadata.keyko.rocks/api/v1/metadata/assets/ddo/"+id, {
        headers: {'Accept': 'application/json','Content-Type': 'application/json'}
      })
      const ddo = await packageData.json()
      const pack: any = {
        name: 'No info',
        did: '',
        events: []
      }
      if(ddo.service[0].attributes.main.name){
        pack.name = ddo.service[0].attributes.main.name
      }
      if(ddo.id){
        pack.did = ddo.id
      }
      for(const event of events){
        if(
          event.returnValues._entityDid && event.returnValues._entityDid.substr(2) === ddo.id.substr(7) ||
          event.returnValues._did && event.returnValues._did.substr(2) === ddo.id.substr(7)
        ){
          if(event.returnValues._attributes && event.returnValues._attributes.indexOf(",") >= 0){
            const attributes = event.returnValues._attributes.split(",")
            pack.events.push({
              event: event.event,
              company: attributes[0],
              lat: attributes[1],
              lng: attributes[2]
            })
            addIn = true
          }
        }
      }
      if(addIn){
        packages.push(pack)
      }
    }
    this.setState({ packages })
  }

  getStateStyle(state: DeliveryState) {
    switch (state) {
      case DeliveryState.Ok: return styles.statusOk
      case DeliveryState.Error: return styles.statusError
      case DeliveryState.Active: return styles.statusActive
      case DeliveryState.Registered: return styles.statusRegistered
    }
  }

  render() {
    return (
      <View>
        <Title>Your packages</Title>
        <View>
          {this.state.packages.map((item:any) => (
            <TouchableOpacity
              key={item.did}
              onPress={() => this.props.navigation.navigate('detailsItem', item)}>

              <View style={styles.item}>
                <View>
                  <Text style={styles.textMono}>DID: {this.cutDid(item.did)}</Text>
                  <Subheading>{item.name}</Subheading>
                  <Subheading style={styles.textSubAlt}>
                    State: {' '}
                    <Text style={this.getStateStyle(item.state)}>
                      {item.state}
                    </Text>
                  </Subheading>
                </View>
                <View>
                  {/* <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.83331 22.6962L15.1347 12.9773L4.83331 3.25827L8.0047 0.272705L21.5 12.9773L8.0047 25.6818L4.83331 22.6962Z" fill="black" fillOpacity="0.54"/>
                  </svg> */}
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
    color: '#D7B7FD',
  },
  statusRegistered: {
    color: '#7C02F3',
  }
})
