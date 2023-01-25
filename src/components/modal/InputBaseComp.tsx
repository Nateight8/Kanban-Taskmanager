import { styled } from '@mui/material/styles';
import React from 'react'
import InputBase from '@mui/material/InputBase';
import { Label } from '@mui/icons-material';
import { FormControl, FormLabel, FormHelperText } from '@mui/material'
import { useField } from 'formik';


type Props = { label: string, row?: number }

function InputBaseComp({ label, row, ...otherProps }: Props) {

    const [field, meta] = useField(name);

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1),
            borderRadius: theme.shape.borderRadius,
            border: "1px solid #444450",

        },
    }));


    return (

        <FormControl sx={{ width: "100%", marginBlock: "0.5rem" }}>
            <FormLabel sx={{ color: "white", padding: "0.2rem", fontSize: "0.8rem" }}>{label}</FormLabel>
            <StyledInputBase  {...field} {...otherProps} multiline rows={row} />
            <FormHelperText></FormHelperText>
        </FormControl>
    )
}

export default InputBaseComp