import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import QRCode from 'qrcode.react'
import MapView from 'react-native-maps'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Props {
  route: any,
  navigation: any
}

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZXJ1aXpnYXIiLCJhIjoiY2toZzZlejJ5MDR1dTMzbzE1ZGNncm1lcyJ9.X0KlUylvR7uU1c-AD7OYhQ'
})

export class DetailsItem extends React.Component<Props> {
    render() {
      return (
        <View>
            <div>
              <Text>Item details:</Text>
              <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnLRtCs2wyvMkbJPPsS4mBWOvU1SJh1OQ&callback=initMap" type="text/javascript"></script>
              <div>
                <div>DID: {this.props.route.params.did}</div>
                <div>State: {this.props.route.params.state}</div>
              </div>
              <div>
                <QRCode value={this.props.route.params.did}/>
              </div>
              {this.props.route.params.x}
              {this.props.route.params.y}
              <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                  height: '50vh',
                  width: '50vw'
                }}
                center={[this.props.route.params.x,this.props.route.params.y]}
              >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                  <Feature coordinates={[this.props.route.params.x, this.props.route.params.y]} />
                </Layer>
              </Map>
             </div>
        </View>
      );
    }
}
