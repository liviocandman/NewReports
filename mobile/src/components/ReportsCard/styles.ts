import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  card:{
    flexBasis:0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex:1,
    width: 366,
    height: 68,
    borderRadius: 10,
    backgroundColor: THEME.COLORS.PRIMARY,
    paddingHorizontal:20,
    marginTop: 50,

  },
  cardText:{
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD
  },
  cardDate:{
    width: 90,
    color: THEME.COLORS.TEXT,
  }
});