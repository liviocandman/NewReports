import { useEffect, useState } from 'react'
import { Center, VStack, Box,  } from 'native-base';
import { FlatList } from 'react-native'

import { ReportsCard, ReportsCardProps } from '../../components/ReportsCard'
import { GoBack } from '../../components/GoBack';
import { Heading } from '../../components/Heading';

export function ReportsList(){
    const [reports, setReports] = useState<ReportsCardProps[]>([])

    useEffect(() => {
        fetch('http://192.168.1.5:4000/reports')
        .then(response => response.json())
        .then(data =>setReports(data))
    },[])

    return(
        <VStack>
            <Center>
                <GoBack />
                <Heading
                    title="RELATOS"
                    subtitle="Área          Setor          Data"
                />
                <FlatList 
                    data={reports}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ReportsCard 
                        data={ item }
                        key={item.id}
                        />
                    )}
                />
            
                
            </Center>
        </VStack>
    )
}