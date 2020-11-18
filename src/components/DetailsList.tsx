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

  componentDidMount() {
    this.loadPackages()
  }

  loadPackages = async() => {
    this.setState({loading:true})
    await this.context.loadPackages()
    this.setState({ loading:false })
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
        {this.state.loading === false ? (
          <ScrollView style={[styles.container]}>
            <View style={[styles.container, styles.scroll]}>
              <Title>Your packages</Title>
              <View>
                {this.context.packages.map((item:any) => (
                  <TouchableOpacity
                    key={item.did}
                    onPress={() => this.props.navigation.navigate('detailsItem', item)}>

                    <View style={styles.item}>
                      <View>
                        <Text style={styles.textMono}>DID: {cutDid(item.did)}</Text>
                        <Subheading>{item.name}</Subheading>
                        <Subheading style={styles.textSubAlt}>
                          State: {' '}
                          <Text style={getStateStyle(item.company)}>
                            {item.company || 'Pending'}
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
        ) : (
          <View style={[styles.loader, styles.horizontal]}>
            <ActivityIndicator size="large" color="#000"></ActivityIndicator>
          </View>
        )}
        {company === 'Man'
          ? (
            <Button
              icon="plus"
              onPress={() => this.props.navigation.navigate('camera')} >

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
