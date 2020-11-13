import React from 'react';
import { Text, View } from 'react-native'
import QRCode from 'qrcode.react';
interface Props {
  route: any,
  navigation: any
}
export class DetailsItem extends React.Component<Props> {
    render() {
      return (
        <View>
            <Text>Item details:</Text>
             <div>DID: {this.props.route.params.did}</div>
             <div>State: {this.props.route.params.state}</div>
             <br/>
             <div>
              <QRCode value={this.props.route.params.did}/>
             </div>
        </View>
      );
    }
}