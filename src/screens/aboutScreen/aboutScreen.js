import React, { Component } from 'react'
import {
    View,
    Text,
} from 'react-native'

import MainMenu from '../../components/menu/mainMenu'

class AboutScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'About',
        drawerIcon: ({ tintColor }) => (
          <Text>Icon</Text>
        ),
      };
    
      render() {
        return (
          <View>
              
              <MainMenu navigation={this.props.navigation} />

              <View>
                  <Text>About Screen</Text>
              </View>

          </View>
        );
      }
}

export default AboutScreen