import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  title: {
    color: THEME.COLORS.PRIMARY,
    width: 299,
    height: 71,
    top: 180,
    textAlign: 'center',
    position: 'absolute',
    fontSize: 48,
    lineHeight: 58,
    fontFamily: THEME.FONT_FAMILY.BOLD 
  },
  logo: {
    position: 'absolute',
    top: 286,
    left: 100 
  },
  subTitle1: {
    position: 'absolute',
    color: THEME.COLORS.WARNING,
    width: 239,
    height: 105,
    top: 465,
    textAlign: 'center',
    fontSize: 48,
    lineHeight: 58,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  subTitle2: {
    position: 'absolute',
    color: THEME.COLORS.DARK,
    width: 239,
    height: 105,
    top: 510,
    textAlign: 'center',
    fontSize: 48,
    lineHeight: 58,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  button: {
    position: 'absolute',
    alignItems: 'center',
    width: 207,
    height: 61,
    gap: 10,
    top: 714,
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 64
  },
  textButton: {
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.TEXT,
    flex:1,
    textAlign: 'center',
    lineHeight: 29,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,

  },

});