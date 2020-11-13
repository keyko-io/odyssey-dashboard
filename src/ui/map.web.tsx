import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { MapProps } from './map-common'

const Mapbox = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZXJ1aXpnYXIiLCJhIjoiY2toZzZlejJ5MDR1dTMzbzE1ZGNncm1lcyJ9.X0KlUylvR7uU1c-AD7OYhQ'
})

export function Map({latitude, longitude}: MapProps) {
  return (
    <View>
      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnLRtCs2wyvMkbJPPsS4mBWOvU1SJh1OQ&callback=initMap" type="text/javascript"></script>
      <Mapbox
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '50vh',
          width: '50vw'
        }}
        center={[latitude, longitude]}>

        <Layer type="symbol" id="marker" layout={{'icon-image': 'marker-15'}}>
          <Feature coordinates={[latitude, longitude]} />
        </Layer>
      </Mapbox>
    </View>
  )
}
