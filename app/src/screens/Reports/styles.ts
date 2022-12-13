import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  
  },
  reportsImg: {
    top: 80
  },
  pageButtons:{
    top: 50,
    width: '100%',
    alignItems: 'center',
    marginBottom: 40
  },
  spaceButton: {
    marginVertical: 40,
    color: THEME.COLORS.PRIMARY,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BOLD
  }, 
});