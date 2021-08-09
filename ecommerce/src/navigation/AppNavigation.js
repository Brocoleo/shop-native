import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Home from '../screens/Home'

const Tab = createMaterialBottomTabNavigator()

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name= 'home'
                component={Home}
                options={{
                    title: "Inicio"
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
