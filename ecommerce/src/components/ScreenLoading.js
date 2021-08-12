import React from 'react'
import { StyleSheet, ActivityIndicator, SafeAreaView, Text } from 'react-native'

export default function ScreenLoading(props) {
    const {text, size,color} = props

    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator size={size} color={color} styles={styles.loading} />
            <Text>{text}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    loading:{
        marginBottom: 10,
    },
    title:{
        fontSize:18,
    }
})

ScreenLoading.defaultPops = {
    text: "Cargando ...",
    color: "#000"
}