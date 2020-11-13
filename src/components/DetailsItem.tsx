import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import QRCode from 'qrcode.react'
import MapView from 'react-native-maps'

interface Props {
  route: any,
  navigation: any
}
export class DetailsItem extends React.Component<Props> {
  render() {
    return (
      <View>
        <Text>Item details:</Text>
        <div>DID: {this.props.route.params.did}</div>
        <div>State: {this.props.route.params.state}</div>
        <br/>
        <div>
          <QRCode value={this.props.route.params.did}/>
        </div>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}
