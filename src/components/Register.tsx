import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, Caption } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form'

import { Title, Button } from '../ui';
import { DeliveryState } from '../shared/types';

import { listItems } from './DetailsList'

//Get this data calling on chain or to the metadata-api
interface Props {
  route: any,
  navigation: any
}

type Inputs = {
  did: string,
  name: string,
  description: string,
}

const generateDid = () => `did:nvm:${Array.from({length: 5}).map(() => Math.floor(Math.random() * 2 ** 32).toString(16)).join('').substr(0, 40)}`

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}

let latitude: any
let longitude: any

function success(pos:any) {
  var crd = pos.coords

  console.log('Your current position is:')
  console.log(`Latitude : ${crd.latitude}`)
  console.log(`Longitude: ${crd.longitude}`)
  console.log(`More or less ${crd.accuracy} meters.`)
  latitude = crd.latitude
  longitude = crd.longitude
}

function error(err: any) {
  console.warn(`ERROR(${err.code}): ${err.message}`)
}
interface params {
  route: {
    params: any
  }
}

navigator.geolocation.getCurrentPosition(success, error, options)
export function Register(params: params) {
  console.log(params.route.params)
  const {control, register, handleSubmit, errors, setValue, getValues} = useForm<Inputs>({mode: 'onChange', criteriaMode: 'all'})
  const {name, description} = getValues()
  //TODO change to register using nevermined-sdk
  const onSubmit = (data: any) =>
    listItems.push({
      ...data,
      x: longitude,
      y: latitude,
      steps: [
        {id: 0, completed: true},
        {id: 1, completed: false, by: 'Checkpoint #1'},
      ],
      state:DeliveryState.Registered,
    })

  useEffect(() => {
    register('did')
    register('name', {required: true})
    register('description', {required: true})
  }, [register])

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {!params.route?.params && <Title>Register Package</Title> }
        {params.route.params && <Title>Inspect Package</Title> }
        <Controller
          name="did"
          control={control}
          defaultValue={params.route?.params?.did || ""}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={styles.input}
              label="DID"
              disabled={params.route?.params?.name}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}/>
          )} />
        <Caption style={styles.caption}>Autopopulated</Caption>

        <Controller
          name="name"
          control={control}
          rules={{required: true}}
          defaultValue={params.route?.params?.name || ""}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={styles.input}
              label="Name"
              disabled={params.route?.params?.name}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}/>
          )} />
        <Caption style={styles.caption}>Required</Caption>

        <Controller
          name="description"
          defaultValue={params.route?.params?.description || ""}
          control={control}
          rules={{ required: true }}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={styles.input}
              label="Description"
              disabled={params.route?.params?.description}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}/>
          )} />
        <Caption style={styles.caption}>Required</Caption>

      </ScrollView>

      {params.route.params && <Button
        icon="plus"
        onPress={handleSubmit(onSubmit)}
        >
        Inspect package
      </Button> 
      }
      
      {!params.route.params && <Button
        icon="plus"
        onPress={handleSubmit(onSubmit)}
        disabled={!!Object.keys(errors).length || !name || !description}>
        Register package
      </Button>
      }     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  input: {
    marginHorizontal: 16,
  },
  caption: {
    marginHorizontal: 16,
    marginBottom: 16,
    paddingLeft: 16,
    paddingTop: 4,
  }
})
