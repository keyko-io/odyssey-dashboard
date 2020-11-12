import { BaseRouter } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View, Image } from 'react-native';

//Get this data calling on chain or to the metadata-api
interface Props {
  route: any,
  navigation: any
}
export class DetailsItem extends React.Component<Props> {
    render() {
      return (
        <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center' }}>
            <Text>Item details:</Text>
             <div>DID: {this.props.route.params.did}</div>
             <div>State: {this.props.route.params.state}</div>
        </View>
      );
    }
}