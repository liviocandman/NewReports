import { Image, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import accessImg from '../../assets/access_img.png'
import { styles } from './styles';
import { GoBack } from '../../components/GoBack';
import { Heading } from '../../components/Heading';

import { Button } from '../../components/Button';

export function Access() {

    const navigation = useNavigation();

    function handleAdvance(){
        navigation.navigate('reports');
    }


  return (
    <SafeAreaView style={styles.container}>
        
        <GoBack />
        <Heading 
            title="ACESSO"
            subtitle='Verificação de segurança'
        />
        <View style={styles.pageButtons}>
            <Button 
                titleBtn='Número de ID'
                onPress={handleAdvance}
            />
            <View >
                <Text style={styles.spaceButton}>ou</Text>
            </View>
            <Button 
                titleBtn='QR Code'
                onPress={handleAdvance}
            />
        </View>
        <Image
            source={accessImg}
            style={styles.accessImg}
        />
      
    </SafeAreaView>
  );
}