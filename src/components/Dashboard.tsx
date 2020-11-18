import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../../context';
import MSDLogo from '../../resources/images/msd'
import KLMLogo from '../../resources/images/klm'
import DHLLogo from '../../resources/images/dhl'
import RECIPIENTLogo from "../../resources/images/recipient"

interface Props {
  navigation: any,
}

const dashboardItems = [
  {company: 'Man', logo: (<MSDLogo/>), title: 'Acme Co.', subtitle: 'Manufacturer'},
  {company: 'Trans0', logo: (<DHLLogo/>), title: 'Armadillo Shipping', subtitle: 'Ground Transport'},
  {company: 'Trans1', logo: (<KLMLogo/>), title: 'Pidgeon Carriers', subtitle: 'Air Transport'},
  {company: 'Recip', logo: (<RECIPIENTLogo/>), title: 'John Doe', subtitle: 'End Recipient'},
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
            <TouchableOpacity style={styles.tileTouchable} onPress={()=> this.openList(company)}>
              <View style={styles.tile}>
                {/*<View style={styles.logoWrapper}>{logo}</View>*/}
                <View style={styles.textWrapper}>
                  <Text style={styles.text}>
                    {title} {'\n'} <Text style={styles.companySubtitle}>{subtitle}</Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: '2.5em',
    width: '100%',
    flex: 1,
  },
  tileTouchable: {
    margin: 10,
    display: 'flex',
    maxWidth: '44%',
    minWidth: '44%',
    flex: 1,
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    borderColor: '#86FFEA',
    borderWidth: 2,
    borderRadius: 12
  },
  tile: {
    width: '100%',
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
    display: 'flex',
    marginHorizontal: 'auto',
  }
})

