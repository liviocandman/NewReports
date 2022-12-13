import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'


import { styles } from './styles';
import { THEME } from '../../theme';

export function GoBack() {

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }
    
    return (
        <TouchableOpacity
        onPress={handleGoBack}
        style={styles.goBackButton}
    >
        <Entypo 
            name="arrow-with-circle-left"
            color={THEME.COLORS.PRIMARY}
            size={30}
        />
    </TouchableOpacity>
  );
}