import React, {useState} from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Auth from "./src/screens/Auth" 

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  const [auth, setAuth] = useState(undefined)
  return (
    <PaperProvider>
      {auth ? <Text>Zona usuarios</Text> : <Auth />}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
