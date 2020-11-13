import React from 'react';
import { View } from 'react-native';

//Get this data calling on chain or to the metadata-api
export const listItems = [  {
  did: 'did:nvm:0123456789',
  description: 'Robin',
  state: 'In Transit',
  x: 13.421375,
  y: 52.492450,
  destination: 'Berlin'
},
{
  did: 'did:nvm:11111111111',
  description: 'Dave',
  state: 'Delivered',
  x: -4.435115,
  y: 36.7197404,
  destination: 'Malaga'
},
];

interface Props {
  navigation: any
}

export class DetailsList extends React.Component<Props> {
    render() {
      return (
        <View>
          <ul>
            {listItems.map(item => (
              <li key={item.did}>
                <div onClick={() => this.props.navigation.navigate('detailsItem', item)}>
                  <div>{item.did}</div>
                  <div>{item.description}</div>
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