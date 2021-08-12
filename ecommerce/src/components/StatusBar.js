import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'

export default function StatusBarCustom(props) {
    const {backgroundcolor, ...rest} = props

    return (
        <>
            <StatusBar backgroundcolor={backgroundcolor}{...rest} />
            <SafeAreaView 
                style={{
                    flex:0,
                    backgroundColor: backgroundcolor
                }}
            />
        </>
    )
}
