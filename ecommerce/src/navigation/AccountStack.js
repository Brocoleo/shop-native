import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Account from '../screens/Account/Account'
import ChangeName from '../screens/Account/ChangeName'
import Addresses from '../screens/Account/Addresses'
import AddAddress from '../screens/Account/AddAddress'
import ChangeEmail from '../screens/Account/ChangeEmail'
import ChangeUsername from '../screens/Account/ChangeUsername'
import colors from '../styles/colors'
import ChangePassword from '../screens/Account/ChangePassword'


const Stack = createStackNavigator()

export default function AccountStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: colors.fontLight,
                headerStyle: { backgroundColor: colors.bgDark },
                cardStyle: {
                backgroundColor: "#fff",
                },
            }}
        >
            <Stack.Screen 
            name="account"
            component={Account}
            options={{title:"Cuenta", headerShown: false}}
            />

            <Stack.Screen 
            name="change-name"
            component={ChangeName}
            options={{title:"Cambiar nombre y apellidos"}}
            />

            <Stack.Screen 
            name="change-email"
            component={ChangeEmail}
            options={{title:"Cambiar email"}}
            />

            <Stack.Screen 
            name="change-username"
            component={ChangeUsername}
            options={{title:"Cambiar username"}}
            />

            <Stack.Screen 
            name="change-password"
            component={ChangePassword}
            options={{title:"Cambiar contrasenas"}}
            />

            <Stack.Screen 
            name="add-address"
            component={AddAddress}
            options={{title:"Nueva Direccion"}}
            />

            <Stack.Screen 
            name="addresses"
            component={Addresses}
            options={{title:"Mis Direcciones"}}
            />

        </Stack.Navigator>
    )
}
