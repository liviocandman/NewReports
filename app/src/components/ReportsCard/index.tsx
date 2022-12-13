import {TouchableOpacity, TouchableOpacityProps, Text} from 'react-native'

import { styles } from './styles'

export interface ReportsCardProps {
    id: string;
    area: string;
    setor: string;
    tipo: string;
    descricao: string;
    date: string;
}

interface Props extends TouchableOpacityProps {
    data: ReportsCardProps 
}

export function ReportsCard({ data, ...rest}: Props) {
    return(
        <TouchableOpacity style={styles.card} {...rest}>
            <Text style={styles.cardText}>{data.area}</Text>
            <Text style={styles.cardText} >{data.setor}</Text>
            <Text style={styles.cardDate}>{data.date}</Text>
           
           
        </TouchableOpacity>
    )
}