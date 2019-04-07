import React, {Component} from 'react'
import { View } from 'react-native'
import AppNavigator from './src/screens/navigator'


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <AppNavigator />
      </View>
    )
  }
}


