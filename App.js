import { SafeAreaView } from 'react-native';
import Cesta from './src/Telas/Cesta'
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { SafeAreaView , View  } from 'react-native-web';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
 }from'@expo-google-fonts/montserrat';

 import{
  useFonte,
  Lato_400Regular,
  Lato_700Bold
 }  from '@expo-google-fonts/lato';


export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold" : Montserrat_700Bold
  });
  const [fonteCarregada2] = useFonte({
    "LatoRegular" : Lato_400Regular,
    "LatoBold" : Lato_700Bold
  });

  if (!fonteCarregada) {
    return<h1>Não carregou</h1>
  }
  return (
    <SafeAreaView>
     <Cesta />
    </SafeAreaView>
  )
}

