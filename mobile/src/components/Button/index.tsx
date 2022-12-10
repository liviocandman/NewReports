import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    titleBtn: string,
}

export function Button({titleBtn, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
        <Text style={styles.textButton}>{titleBtn}</Text>
    </TouchableOpacity>
  );
}