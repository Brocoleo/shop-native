import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Favorites from '../screens/Favorites'
import Home from '../screens/Home'
import Cart from '../screens/Cart'
import Account from '../screens/Account'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'


const Tab = createMaterialBottomTabNavigator();

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
                <Tab.Screen 
                name= 'favorites'
                component={Favorites}
                options={{
                    title: "Favoritos"
                }}
                />
                <Tab.Screen 
                name= 'cart'
                component={Cart}
                options={{
                    title: "Carrito"
                }}
                />
                <Tab.Screen 
                name= 'account'
                component={Account}
                options={{
                    title: "Mi Cuenta"
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
