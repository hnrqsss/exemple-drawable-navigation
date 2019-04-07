import React, { Component } from 'react'
import {
    View,
    Text,
} from 'react-native'

import MainMenu from '../../components/menu/mainMenu'

class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Text>Icone</Text>
        ),
      };
    
      render() {
        return (
          <View>
              
              <MainMenu navigation={this.props.navigation} />

              <View>
                  <Text>Home</Text>
              </View>

          </View>
        );
      }
}

export default HomeScreen