import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import reportsImg from '../../assets/reports_img.png'

import { Button } from '../../components/Button';
import { GoBack } from '../../components/GoBack';
import { Heading } from '../../components/Heading';


import { styles } from './styles';

export function Reports() {
  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
      <Heading 
        title='O que deseja fazer agora?'
        subtitle=''
      />
        <View style={styles.pageButtons}>
          <Button
            titleBtn="Relatar algo"
          />
          <View >
            <Text style={styles.spaceButton}>ou</Text>
          </View>
          <Button 
            titleBtn='Checar Relato'
          />
        </View>
        <Image 
          source={reportsImg}
          style={styles.reportsImg}
        />
    </SafeAreaView>
  );
}