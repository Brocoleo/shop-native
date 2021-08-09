import React , {useState} from 'react'
import { View, Text } from 'react-native'
import {useFormik} from "formik"
import * as Yup from 'yup'
import useAuth from '../../hooks/useAuth'
import {loginApi}  from "../../api/user"
import {TextInput, Button} from "react-native-paper"
import { formStyle } from '../../styles'

export default function LoginForm(props) {
    const {changeForm} = props
    const [loading, setLoading] = useState(false)
    const {login} = useAuth();

    const formik = useFormik({
        initialValues : initialValues(),
        validationSchema: Yup.object(validateSchema()),
        onSubmit: async (formData )=>{
            setLoading(true)
           try {
               const response = await loginApi(formData);
               if(response.statusCode) throw "Error en el usuario o contrasena"
               login(response)
           } catch (error) {               
                Toast.show("Error al iniciar sesion",{
                    position: Toast.positions.CENTER,
                })
                setLoading(false)
           }
        }
    })

    return (
        <View>
            <TextInput label="Email o Username" onChangeText={(text)=>formik.setFieldValue("identifier", text)} value={formik.values.identifier} error={formik.errors.identifier}style={formStyle.input}/>
            <TextInput label="contrasena" onChangeText={(text)=>formik.setFieldValue("password", text)} value={formik.values.password} error={formik.errors.password}style={formStyle.input} secureTextEntry/>
            <Button mode="contained" style={formStyle.btnSucces} onPress={formik.handleSubmit} loading={loading}>Entrar</Button>
            <Button mode="text"  style={formStyle.btnTextLabel} onPress={changeForm}>Registrarse</Button>
        </View>
    )
}
function initialValues(){
    return {
        identifier: "",
        password: "",

    }
}
function validateSchema() {
    return {
        identifier: Yup.string().required(true),
        password: Yup.string().required(true),
    }
}
