import React from 'react'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import { MenuItem, Select } from '@mui/material'
import { styled } from '@mui/material/styles';

type Props = {}

export default function SelectComp({ }: Props) {


    const status = ["Todo", "Doing", "Done"]

    const StyledSelect = styled(Select)(({ theme }) => ({
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
            <FormLabel sx={{ color: "white", padding: "0.2rem", fontSize: "0.8rem" }}>Status</FormLabel>

            <StyledSelect>

                {status.map((item) => (
                    <MenuItem value={item} key={item} sx={{ textTransform: "capitalize" }}>{item}</MenuItem>

                ))}



            </StyledSelect>


            <FormHelperText></FormHelperText>
        </FormControl>


    )
}