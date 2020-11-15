import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Subheading } from 'react-native-paper';
import { Context } from '../../context';
import { Title, Button } from '../ui';
import { DeliveryState, cutDid, getStateStyle } from '../shared';
import { Activities } from '@nevermined-io/nevermined-sdk-js/dist/node/keeper/contracts/ProvenanceRegistry'

interface State {
  packages: any[]
  loading: boolean
}

interface Props {
  navigation: any
}

export class DetailsList extends React.Component<Props, State> {
  public static contextType = Context
  state = {
    packages:[],
    loading: false
  }

  cutDid(did: string) {
    return did.replace(/^(\w+:\w+:[a-f0-9]{8}).+([a-f0-9]{8})$/i, '$1...$2')
  }

  componentDidMount() {
    this.loadPackages()
  }

  loadPackages = async() => {
    this.setState({loading:true})
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
      const packageData = await fetch("https://metadata.keyko.rocks/api/v1/metadata/assets/ddo/"+id, {
        headers: {'Accept': 'application/json','Content-Type': 'application/json'}
      })
      const ddo = await packageData.json()
      const pack: any = { name: 'No info', did: '', events: [] }
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
              activityId: event.returnValues.activityId,
              company: attributes[0],
              lat: attributes[1],
              lng: attributes[2],
              returnValues: event.returnValues,
              returnAttributes: attributes
            })
          }
        }
      }
      packages.push(pack)
    }
    this.setState({ packages, loading:false })
  }

  getStateStyle(state: DeliveryState) {
    switch (state) {
      case DeliveryState.Ok: return styles.statusOk
      case DeliveryState.Error: return styles.statusError
      case DeliveryState.Active: return styles.statusActive
      case DeliveryState.Registered: return styles.statusRegistered
    }
  }

  getActivityStyle(activity: Activities) {
    switch (activity) {
      case Activities.GENERATED: return 'Generated'
      case Activities.USED: return 'Used'
      case Activities.ACTED_IN_BEHALF: return 'Acted in behalf'
      case Activities.MANUFACTURING: return 'Manifacturing'
      case Activities.TRANSPORTATION: return 'Transportation'
      case Activities.DELIVERY: return 'Delivery'
    }
  }

  render() {
    const {company} = this.context

    return (
      <View style={styles.container}>
        {this.state.loading === false ?
        <ScrollView style={[styles.container]}>
          <View style={[styles.container, styles.scroll]}>
            <Title>Your packages</Title>
            <View>
              {this.state.packages.map((item:any) => (
                <TouchableOpacity
                  key={item.did}
                  onPress={() => this.props.navigation.navigate('detailsItem', item)}>

                  <View style={styles.item}>
                    <View>
                      <Text style={styles.textMono}>DID: {cutDid(item.did)}</Text>
                      <Subheading>{item.name}</Subheading>
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
        : 
        <View style={[styles.loader, styles.horizontal]}>
          <ActivityIndicator size="large" color="#000"></ActivityIndicator>
        </View>
        }
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
  loader: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
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
