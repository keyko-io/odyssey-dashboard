import React from 'react'
import { View } from 'react-native'
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { GeoJSONLayer } from "react-mapbox-gl";


import { MapProps } from './map-common'

const Mapbox = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZXJ1aXpnYXIiLCJhIjoiY2toZzZlejJ5MDR1dTMzbzE1ZGNncm1lcyJ9.X0KlUylvR7uU1c-AD7OYhQ'
})

const geojson = (coordinates:any) => {
  return {
  "type":"FeatureCollection",
  "features":[
     {
        "geometry":{
           "type":"LineString",
           "coordinates":coordinates                  
        }
     }
  ]
}
}

export function Map({latitude, longitude, height, coordinatesRoute}: MapProps) {
  return (
    <View>
      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnLRtCs2wyvMkbJPPsS4mBWOvU1SJh1OQ&callback=initMap" type="text/javascript"></script>
      <Mapbox
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: !isNaN(height as any) ? `${height}px` : height || '50vh',
          width: '100%'
        }}
        center={[latitude, longitude]}>
        <GeoJSONLayer
          data={geojson(coordinatesRoute)}
          circlePaint={{"circle-color":"red"}}
          linePaint={{"line-color": "black"}}/>
      </Mapbox>
    </View>
  )
}
