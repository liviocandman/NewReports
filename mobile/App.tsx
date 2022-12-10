import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';

import { Loading } from './src/components/Loading';
import { 
  useFonts, 
  Montserrat_900Black,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';



export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_900Black,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold 
  });
  if (!fontsLoaded) {
    return  <Loading /> ;
  }else {
    return (
      <>
        <StatusBar 
          style='auto'
        />
         <Routes /> 
      </>
    );
  }



 
}

