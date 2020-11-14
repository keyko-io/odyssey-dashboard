import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, Caption } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form'

import { Title, Button } from '../ui';
import { DeliveryState } from '../shared/types';

import { listItems, newSteps } from './DetailsList'

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

interface Props {
  route: any
  navigation: any
}

navigator.geolocation.getCurrentPosition(success, error, options)

export function Register(props: Props) {
  const {control, register, handleSubmit, errors, setValue, getValues} = useForm<Inputs>({mode: 'onChange', criteriaMode: 'all'})
  const {params} = props?.route
  const isInspect = !!params
  const {name, description} = getValues()
  //TODO change to register using nevermined-sdk

  const inspect = () => {
    const item = listItems.find(({did}) => did === params.did)
    const step = item?.steps.find(({completed}) => !completed) || {} as any
    step.completed = true
    step.location = {latitude, longitude}
    if (item) {
      props.navigation.navigate('detailsItem', item)
    }
  }

  const onSubmit = (data: any) => {
    const item = {
      ...data,
      longitude,
      latitude,
      steps: newSteps(longitude, latitude),
      state: DeliveryState.Registered,
    }
    listItems.push(item)
    props.navigation.navigate('detailsItem', item)
  }

  useEffect(() => {
    register('did')
    register('name', {required: true})
    register('description', {required: true})
    setValue('did', isInspect ? params.did : generateDid())
    if (isInspect) {
      setValue('name', params.name)
      setValue('description', params.description)
    }
  }, [register])

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Title>{isInspect ? 'Inspect Package' : 'Register Package'}</Title>
        <Controller
          name="did"
          control={control}
          defaultValue=""
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={styles.input}
              label="DID"
              onBlur={onBlur}
              disabled
              onChangeText={value => onChange(value)}
              value={value}/>
          )} />
        <Caption style={styles.caption}>Autopopulated</Caption>

        <Controller
          name="name"
          control={control}
          rules={{required: true}}
          defaultValue=""
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={styles.input}
              label="Name"
              disabled={isInspect}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}/>
          )} />
        <Caption style={styles.caption}>Required</Caption>

        <Controller
          name="description"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={styles.input}
              label="Description"
              disabled={isInspect}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}/>
          )} />
        <Caption style={styles.caption}>Required</Caption>

      </ScrollView>

      {isInspect
        ? (
          <Button
            icon="plus"
            onPress={() => inspect()}>

            Inspect package
          </Button>)
        : (
          <Button
            icon="plus"
            onPress={handleSubmit(onSubmit)}
            disabled={!!Object.keys(errors).length || !name || !description}>

            Register package
          </Button>)}
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
