import React, {useState} from 'react'
import RegisterForm from '../components/Auth/RegisterForm'
import { StyleSheet, View, Text, Image } from 'react-native'
import logo from "../../assets/logo.png"
import {layoutStyle} from "../styles"

export default function Auth() {
const [showLogin, setShowLogin] = useState(false)

    return (
        <View style={layoutStyle.container}>
            <Image style={styles.logo} source={logo}/>
            {showLogin ? <Text>FormLogin</Text> :  <RegisterForm />}
        </View>
    )
}

const  styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 50,
        resizeMode: "contain",
        marginBottom: 20,
    },
});