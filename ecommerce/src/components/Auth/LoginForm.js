import React from 'react'
import { View, Text } from 'react-native'
import {TextInput, Button} from "react-native-paper"
import { formStyle } from '../../styles'

export default function LoginForm(props) {
    return (
        <View>
            <TextInput label="Email o Username" style={formStyle.input}/>
            <TextInput label="contrasena" style={formStyle.input}/>
            <Button mode="contained" style={formStyle.btnSucces}>Entrar</Button>
            <Button mode="text"  style={formStyle.btnTextLabel} onPress={changeForm}>Registrarse</Button>
        </View>
    )
}
