import { Center, VStack, Box,  } from 'native-base';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import client  from '../../api/client'

import { Input } from '../../components/Input';
import { Heading } from '../../components/Heading';
import { GoBack } from '../../components/GoBack';
import { Button } from '../../components/Button';

type FormDataProps = {
  area: string
  setor: string
  tipo: string
  descricao: string
}

const createReportSchema = yup.object({
  area: yup.string().required('Informe a área de ocorrência do relato'),
  setor: yup.string().required('Informe o setor de trabalho'),
  tipo: yup.string().required('Informe o tipo de problema encontrado'),
  descricao: yup.string().required('Conte-nos um pouco mais sobre o que você viu')
})

export function CreateReport() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(createReportSchema)

  })

   async function handleCreateReport (data: FormDataProps){
    const res = await client.post('/reports', {
      ...data,
    })
    console.log(res.data)
  }

  return (
    <VStack flex={1} >
      <Center>
        <GoBack />
      <Heading 
        title='RELATO'
        subtitle='O que deseja relatar ?'
      />
      <Box top={20}>
        <Controller 
          control={control}
          name="area"
          render={({ field: { onChange } }) => (
            <Input 
              placeholder="Aréa de ocorrência ex.: Segurança, Meio Ambiente" 
              onChangeText={onChange} 
              errorMessage={errors.area?.message}
            />
          )}
        />
        <Controller 
          control={control}
          name="setor"
          render={({ field: { onChange } }) => (
            <Input 
              placeholder="Setor ex.: Laminação, Usinagem" 
              onChangeText={onChange} 
              errorMessage={errors.setor?.message}  
            />
          )}
        />
        <Controller 
          control={control}
          name="tipo"
          render={({ field: { onChange } }) => (
            <Input 
            placeholder="Tipo de relato ex.: Incidente, Condições precárias" 
            onChangeText={onChange} 
            errorMessage={errors.tipo?.message}
          />
          )}
        />
        <Controller 
          control={control}
          name="descricao"
          render={({ field: { onChange } }) => (
            <Input 
              placeholder="Adicione uma breve descrição" 
            h={100} 
              onChangeText={onChange} 
              errorMessage={errors.descricao?.message}
            />
          )}
        />

        <Button
          titleBtn="Enviar" 
          onPress={handleSubmit(handleCreateReport)}
          
        />
      </Box>
    </Center>
      
    </VStack>

  );
}