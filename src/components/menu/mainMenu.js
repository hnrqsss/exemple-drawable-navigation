import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Platform,
    TouchableHighlight
} from 'react-native'

import { Icon } from 'react-native-elements'

class MainMenu extends Component {

    handleMenu = () => this.props.navigation.openDrawer()

    render() {
        return(
        
            <View style={styles.container}>
                <TouchableHighlight
                   onPress={this.handleMenu}
                >
                    <Icon
                        name='menu'
                        color='#FFF' 
                    />
                </ TouchableHighlight>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        height: Platform.OS === 'ios' ? 40 : 40 + StatusBar.currentHeight,
        
    }
})

export default MainMenu