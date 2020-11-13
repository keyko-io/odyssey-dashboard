import React from 'react';
import { Text, View } from 'react-native';
import { useForm } from 'react-hook-form'
import { listItems } from './DetailsList'


//Get this data calling on chain or to the metadata-api
interface Props {
  route: any,
  navigation: any
}
type Inputs = {
  name: string,
  description: string,
};


export function Register() {
  const { register, handleSubmit, errors } = useForm<Inputs>()

  //TODO change to register using nevermined-sdk
  const onSubmit = (data:any) => listItems.push({...data, state:'Registered', did: `did:nvm:${Math.random()*1234567890}`})

  return (
    <View>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br/> 
        <Text>Name: </Text>
        <input name="name" defaultValue="test" ref={register({ required: true })} />
        <br/> 
        {errors.name && <span>This field is required</span>}
        <br/>
        <Text>Description: </Text>    
        <input name="description" ref={register} />
        <br/>           
        <br/>
        <Text>Destination: </Text>
        <input name="destination" ref={register} />
        <br/>    
        <br/>    
        <input type="submit"/>

      </form>
    </View>
  );
  
}