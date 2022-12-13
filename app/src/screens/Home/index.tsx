import { Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo.png';
import { styles } from './styles';

export function Home() {

  const navigation = useNavigation();

  function EntryButton(){
    navigation.navigate('access')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Bem Vindo!
      </Text>

      <Image 
        source={logoImg}
        style={styles.logo}
      />

      <Text style={styles.subTitle1}>
        New 
      </Text>
      <Text style={styles.subTitle2}>
        Reports
      </Text>
      
    
      <TouchableOpacity 
        style={styles.button}
        onPress={EntryButton}
      >
        <Text style={styles.textButton}>
          Entrar
        </Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}