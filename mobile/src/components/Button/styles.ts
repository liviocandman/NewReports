import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {

  },
  textButton: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD
  },
  button: {
    borderRadius: 10,
    width: 304,
    height: 61,
    backgroundColor: THEME.COLORS.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
  },
});