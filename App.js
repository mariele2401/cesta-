import { Text, SafeAreaView } from 'react-native';
import Sobrenome from './src/Telas/Sobrenome';

export default function App() {
  return (
    <SafeAreaView>
      <Text>Mariele Floriano Florencio</Text>
      <Sobrenome sobrenome="Floriano"/>
    </SafeAreaView>
  )
}

