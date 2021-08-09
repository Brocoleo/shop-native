import React, {useState, useMemo, useEffect} from 'react';
import { View, Text, Button} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import jwtDecode from 'jwt-decode';
import Auth from "./src/screens/Auth" 
import AutContext from './src/context/AuthContext';
import AppNavigation from './src/navigation/AppNavigation';
import { setTokenApi , getTokenApi, removeTokenApi} from './src/api/token';

export default function App() {
  const [auth, setAuth] = useState(undefined)

  useEffect(() => {
    (async()=>{
      const token = await getTokenApi()
      if(token){
        setAuth({
          token,
          idUser: jwtDecode(token).id

        })
      }else{
        setAuth(null)
      }
    })()
  }, [])

  const login = (user) =>{
    setTokenApi(user.jwt)
    setAuth({
      token: user.jwt,
      idUser: user.user._id
    })
  }

  const logout = () =>{
    if(auth){
      removeTokenApi()
      setAuth(null)
    }
  }

  const authData = useMemo(
    ()=> ({
      auth: undefined,
      login,
      logout,
    }),
    [auth]
  )

  if(auth === undefined) return null

  return (
    <AutContext.Provider value={authData}>
      <PaperProvider>
        {auth ? 
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
          <Text>Zona usuarios</Text>
          <Button title="Cerrar sesion" onPress={authData.logout}/>
        </View> :
         <Auth />}
      </PaperProvider>
    </AutContext.Provider>
  );
}


