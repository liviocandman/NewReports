import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import reportsImg from '../../assets/reports_img.png'

import { Button } from '../../components/Button';
import { GoBack } from '../../components/GoBack';
import { Heading } from '../../components/Heading';


import { styles } from './styles';

export function Reports() {
  const navigation = useNavigation();

  function handleAdvanceCreateReport(){
      navigation.navigate('createreport');
  }
  function handleAdvanceReportsList(){
    navigation.navigate('reportslist');
}


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
            onPress={handleAdvanceCreateReport}
          />
          <View >
            <Text style={styles.spaceButton}>ou</Text>
          </View>
          <Button 
            titleBtn='Checar Relato'
            onPress={handleAdvanceReportsList}
          />
        </View>
        <Image 
          source={reportsImg}
          style={styles.reportsImg}
        />
    </SafeAreaView>
  );
}