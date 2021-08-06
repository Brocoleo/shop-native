import React from 'react'
import { View, Text } from 'react-native'
import {TextInput, Button}  from "react-native-paper"
import {formStyle} from '../../styles'

export default function RegisterForm(props) {
    const {changeForm} = props
    return (
        <View>
            <TextInput  label="Email"  style={formStyle.input}/>
            <TextInput  label="Nombre de usuario"  style={formStyle.input}/>
            <TextInput  label="Contrasena"  style={formStyle.input} secureTextEntry/>
            <TextInput  label="Repetir contrasena"  style={formStyle.input} secureTextEntry/>

            <Button mode="contained" style={formStyle.btnSucces}>Registrarse</Button>
            <Button mode="text" style={formStyle.btnText} labelStyle={formStyle.btnTextLabel} onPress={changeForm}>Iniciar Sesion</Button>
        </View>
    )
}
