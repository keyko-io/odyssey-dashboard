import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Context } from '../../context';
import MSDLogo from '../../resources/images/msd'
import KLMLogo from '../../resources/images/klm'
import DHLLogo from '../../resources/images/dhl'
import RECIPIENTLogo from "../../resources/images/recipient"

interface Props {
  navigation: any,
}

const dashboardItems = [
  {company: 'MSD', logo: (<MSDLogo/>), title: 'MSD', subtitle: 'Supplier'},
  {company: 'DHL', logo: (<DHLLogo/>), title: 'DHL', subtitle: 'Logistics'},
  {company: 'KLM', logo: (<KLMLogo/>), title: 'KLM', subtitle: 'Logistics'},
  {company: 'FR', logo: (<RECIPIENTLogo/>), title: 'Final', subtitle: 'Recipient'},
]

export class Dashboard extends React.Component<Props, {}> {
  public static contextType = Context

  openList = (company: string)  => {
    this.context.setCompany(company)
    this.props.navigation.navigate('detailsList')
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.tilesWrapper}>
          {dashboardItems.map(({company, logo, title, subtitle}) => (
            <TouchableHighlight onPress={()=> this.openList(company)}>
              <View style={styles.tile}>
                <View style={styles.logoWrapper}>{logo}</View>
                <View style={styles.textWrapper}>
                  <Text style={styles.text}>
                    {title} {'\n'} <Text style={styles.companySubtitle}>{subtitle}</Text>
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          ))}
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: '#7C02F3',
    paddingTop: '2.3em',
    textAlign: 'center',
  },
  tilesWrapper: {
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: '2.5em',
    flex: 1,
  },
  tile: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    borderColor: '#86FFEA',
    borderWidth: 2,
    borderRadius: 12
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
  },
  backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '30%',
  },
  companySubtitle: {
    fontWeight: '400'
  },
  textWrapper: {
    width: '70%',
    display: 'flex',
  }
})
