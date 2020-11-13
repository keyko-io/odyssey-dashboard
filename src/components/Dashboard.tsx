import React from 'react';
import { Button, View } from 'react-native';

interface Props {
  navigation: any
}
export class Dashboard extends React.Component<Props> {
  render() {
    return (
      <View>
        <Button title="Camera" onPress={() => this.props.navigation.navigate('camera')}></Button>
        <Button title="Start" onPress={() => this.props.navigation.navigate('detailsList')}></Button>
        <Button title="DHL" onPress={()=> this.props.navigation.navigate('detailsList')}></Button>
        <Button title="KLM" onPress={()=> this.props.navigation.navigate('detailsList')}></Button>
        <Button title="John Doe" onPress={()=> this.props.navigation.navigate('detailsList')}></Button>
        <Button title="Register" onPress={()=> this.props.navigation.navigate('register')}></Button>
      </View>
    );
  }
} 

