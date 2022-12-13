import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 32,
    top: 50,
    alignItems: "center",
  },
  title: {
    color: THEME.COLORS.PRIMARY,
    fontSize: THEME.FONT_SIZE.XG,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  subtitle: {
    color: THEME.COLORS.CAPTION_400,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop: 10
  }

});