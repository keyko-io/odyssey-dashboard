import React from 'react';
import { Button, Text, View, Image } from 'react-native';

interface Props {
  navigation: any
}
export class Dashboard extends React.Component<Props> {
    render() {
      return (
        <View>
          <Button title="Start" onPress={() => this.props.navigation.navigate('detailsList')}></Button>
          <br></br>
          <Button title="DHL" onPress={()=> this.props.navigation.navigate('detailsList')}></Button>
          <br></br>
          <Button title="KLM" onPress={()=> this.props.navigation.navigate('detailsList')}></Button>
          <br></br>
          <Button title="John Doe" onPress={()=> this.props.navigation.navigate('detailsList')}></Button>
          <br></br>
          <Button title="Register" onPress={()=> this.props.navigation.navigate('register')}></Button>
        </View>
      );
    }
} 