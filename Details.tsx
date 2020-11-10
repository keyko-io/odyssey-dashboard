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
  did: 'did:nvm:0123456789',
  item: 'Dave',
  state: 'Delivered',
  destination: 'Malaga'
},
];

export class Details extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ul>
            {list.map(item => (
               <li key={item.did}>        
                  <div>{item.did}</div>
                  <div>{item.item}</div>
                  <div>{item.state}</div>
                  <div>{item.destination}</div>
                </li>
            ))}
          </ul>
        </View>
      );
    }
}