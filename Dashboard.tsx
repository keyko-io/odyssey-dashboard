import React from 'react';
import { Button, Text, View, Image } from 'react-native';

interface Props {
  navigation: any
}
export class Dashboard extends React.Component<Props> {
    render() {
      return (
        <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Start" onPress={() => this.props.navigation.navigate('details')}></Button>
          <br></br>
          <Button title="DHL" onPress={()=> this.props.navigation.navigate('details')}></Button>
          <br></br>
          <Button title="KLM" onPress={()=> this.props.navigation.navigate('details')}></Button>
          <br></br>
          <Button title="John Doe" onPress={()=> this.props.navigation.navigate('details')}></Button>
        </View>
      );
    }
} 