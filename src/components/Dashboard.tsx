import React from 'react';
import { Button, View } from 'react-native';
import { Context } from '../../context';

interface Props {
  navigation: any
}

export class Dashboard extends React.Component<Props, {}> {
  public static contextType = Context

  openList = (company: string)  => {
    this.context.setCompany(company)
    this.props.navigation.navigate('detailsList')
  }

  render() {
    return (
      <View>
        <Button title="MSD" onPress={()=> this.openList('MSD')}></Button>
        <Button title="DHL" onPress={()=> this.openList('DHL')}></Button>
        <Button title="KLM" onPress={()=> this.openList('KLM')}></Button>
        <Button title="Final receipt" onPress={()=> this.openList('FR')}></Button>
      </View>
    );
  }
} 

