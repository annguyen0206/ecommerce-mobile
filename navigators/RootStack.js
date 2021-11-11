import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const RootStack = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Login" component={LoginScreen} />
                <Drawer.Screen name="Signup" component={SignupScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default RootStack