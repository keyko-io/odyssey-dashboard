import React from 'react'
import { Text, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import { Context } from '../../context';
import { Map, Qr, Button } from '../ui';
import { cutDid, getStateStyle } from '../shared'
import { Paragraph, Dialog as RNPDialog, Portal } from 'react-native-paper';
import { DetailsItemStep } from './DetailsItemStep'

interface States {
  showDialog: boolean
  loading: boolean
  yellow: boolean
}

interface Props {
  route: any,
  navigation: any
}

export class DetailsItem extends React.Component<Props, States> {
  public static contextType = Context

  state = {
    showDialog: false,
    loading: true,
    yellow: false
  }

  hideDialog = () => {
    this.setState({showDialog: false})
  }

  showDialoge = () => {
    this.setState({showDialog:true, loading:true})
    setTimeout(() => this.setState({loading:false, yellow: true}), 5000);
  }

  render() {
    const {did, name, state, destination, events} = this.props.route.params
    console.log(this.props.route.params)

    const {company} = this.context

    let coordinates
    let completed = 0
    if (company === 'Man'){
      coordinates = [[4.9041,52.3675]]
      completed = 1
    }
    if (company === 'Trans0') {
      coordinates = [[4.9041, 52.3675], [4.9041, 52.3676]]
      completed = 2
    }
    if (company === 'Trans1') {
      coordinates = [[4.7683,52.3105], [4.9041, 52.3676]]
      completed = 3
    }
    if (company === 'Recip') {
      coordinates = [[4.7683,52.3105], [4.8683,52.3105], [12.8683,52.3105]]
      completed = 4
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
                    {company}
                  </Text>
                </Text>
                <Text style={styles.text}>Destination: Singapore</Text>
              </View>
              <Qr size={100} value={did} />
            </View>
            <Map
              latitude={52.3676}
              longitude={4.9041}
              coordinatesRoute={coordinates}
              latitudeDelta={0.0922}
              longitudeDelta={0.0421}
              height="200"/>
            <View>
            <DetailsItemStep
                  first={true}
                  last={false}
                  recipient={''}
                  completed={completed > 0}
                  navigation= {this.props.navigation}/>
            <DetailsItemStep
                  first={false}
                  last={false}
                  recipient={'by A.S.'}
                  completed={completed > 1}
                  navigation= {this.props.navigation} />
            <DetailsItemStep
                  first={false}
                  last={false}
                  recipient={'by P.C.'}
                  completed={completed > 2}
                  yellow={this.state.yellow}
                  navigation= {this.props.navigation} />
            <DetailsItemStep
                  first={false}
                  last={true}
                  recipient={''}
                  completed={completed > 3}
                  navigation= {this.props.navigation} />
              {/* {events.map((event:any, i:number) => (
                <DetailsItemStep
                  key={i}
                  first={i === 0}
                  last={i === events.length - 1}
                  recipient={'by'}
                  completed={true} />
              ))} */}
            </View>
          </View>
        </ScrollView>

        <Button
          icon="magnify"
          // disabled={company !== nextCompany}
          onPress={() => this.props.navigation.navigate('register', {did, name})} >
          Inspect package
        </Button>
        {this.context.company === 'Trans1'?
          <Button style={{position:'absolute', bottom:80}} onPress={()=>this.showDialoge()}>Temperature Check</Button>
        :null}
        <RNPDialog style={styles.whiteBackground} visible={this.state.showDialog} onDismiss={this.hideDialog}>
          <RNPDialog.Title style={[styles.blackText, styles.font24]}>{'Temperature check'}</RNPDialog.Title>
          <RNPDialog.Content>
            <Paragraph style={[styles.blackText, styles.font18]}>{this.state.loading === true ? <ActivityIndicator/> : 'We have successfully processed your request and the result is the following: FAIL'}</Paragraph>
          </RNPDialog.Content>
          <RNPDialog.Actions>
            <Button color="black" onPress={this.hideDialog}>Yes</Button>
            <Button color="black" onPress={this.hideDialog}>Close</Button>
          </RNPDialog.Actions>
        </RNPDialog>
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
  whiteBackground: {
    backgroundColor: 'white'
  },
  blackText: {
    color: 'black',
    height: 100,
    textAlign: 'center'
  },
  font24: {
    fontSize: 24
  },
  font18: {
    fontSize: 18
  }
})
