import { BaseRouter } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View, Image } from 'react-native';
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
    const onSubmit = (data:any) => listItems.push({...data, state:'Registered', did: `did:nvm:${Math.random}`})

    return (
    <View>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue="test" ref={register({ required: true })} />
            <br/> 
            {errors.name && <span>This field is required</span>}
            <br/>    
            <input name="description" ref={register} />
            <br/>
            <input name="destination" ref={register} />
            <br/>    
            <input type="submit" />

        </form>
    </View>
    );
    
}