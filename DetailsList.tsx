import React from 'react';
import { Button, Text, View, Image } from 'react-native';

//Get this data calling on chain or to the metadata-api
const list = [  {
  did: 'did:nvm:0123456789',
  item: 'Robin',
  state: 'In Transit',
  destination: 'Berlin'
},
{
  did: 'did:nvm:11111111111',
  item: 'Dave',
  state: 'Delivered',
  destination: 'Malaga'
},
];

interface Props {
  navigation: any
}

export class DetailsList extends React.Component<Props> {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ul>
            {list.map(item => (
               <li key={item.did}>
                  <div onClick={() => this.props.navigation.navigate('detailsItem', item)}>
                    <div>{item.did}</div>
                    <div>{item.item}</div>
                    <div>{item.state}</div>
                    <div>{item.destination}</div>
                  </div>
                </li>
            ))}
          </ul>
        </View>
      );
    }
}