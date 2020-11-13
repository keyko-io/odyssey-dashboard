import MapView from 'react-native-maps'

import { MapProps } from './map-common'

export function Map(props: MapProps) {
  return (
    <MapView initialRegion={props as any} />
  )
}
