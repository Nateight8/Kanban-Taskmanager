import { styled } from '@mui/material/styles';
import React from 'react'
import InputBase from '@mui/material/InputBase';
// import { Label, Button } from '@mui/icons-material';
import { FormControl, FormLabel, FormHelperText, Button } from '@mui/material'


function SubTask() {
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

        <>

            {/* <FormControl sx={{ width: "100%", marginBlock: "0.5rem" }}>
                <FormLabel sx={{ color: "white", padding: "0.2rem", fontSize: "0.8rem" }}>Sub Task</FormLabel>
                <StyledInputBase />
                <FormHelperText></FormHelperText>
            </FormControl> */}

            <Button fullWidth variant="contained" sx={{ color: "#645fc6", background: "white", textTransform: "capitalize", borderRadius: "1.5rem", "&:hover": { color: "#645fc6", background: "#E5E8EB", } }}>
                Add Subtask
            </Button>
        </>
    )
}

export default SubTask