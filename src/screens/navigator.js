import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from './homeScreen/homeScreen'
import AboutScreen from './aboutScreen/aboutScreen'

const navigator = createDrawerNavigator({
    home: {
        screen: HomeScreen
    },
    about: {
        screen: AboutScreen
    }  
}, {
    initialRouteName: 'home'
})


export default createAppContainer(navigator)
