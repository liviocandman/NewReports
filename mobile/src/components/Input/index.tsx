import { Input as NativeBaseInput, IInputProps, FormControl } from "native-base"

type Props = IInputProps & {
    errorMessage?: String | null;
}

export function Input({ errorMessage=null, isInvalid, ...rest}: Props) {
    const invalid = !!errorMessage || isInvalid
    return (
        <FormControl mb={4} isInvalid={invalid} >
            <NativeBaseInput 
            bg='transparent'
            borderColor={ '#072B73'}
            h={16}
            mb={4}
            isInvalid={invalid}
            _invalid={{
                borderColor: "red.500"
            }}
            _focus={{
                bg:"transparent",
                borderWidth: 2,
                borderColor: "blue.900"
            }}
            w = {300}
            {...rest}
        />
        <FormControl.ErrorMessage mt={0}>
            {errorMessage}
        </FormControl.ErrorMessage>

        </FormControl>
        
    )
}