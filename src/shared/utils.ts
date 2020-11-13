import { StyleSheet } from 'react-native';

import { DeliveryState } from './types'

export const cutDid = (did: string) => did.replace(/^(\w+:\w+:[a-f0-9]{8}).+([a-f0-9]{8})$/i, '$1...$2')

export const getStateStyle = (state: DeliveryState) => {
  switch (state) {
    case DeliveryState.Ok: return stateStyles.statusOk
    case DeliveryState.Error: return stateStyles.statusError
    case DeliveryState.Active: return stateStyles.statusActive
    case DeliveryState.Registered: return stateStyles.statusRegistered
  }
}

const stateStyles = StyleSheet.create({
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
