import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import AddToTask from '../modal/AddToTask'

type Props = {}

function NavBarComp({ }: Props) {

    const [open, setopen] = useState(false)

    const handleOpen = () => {
        setopen(true)
    }

    const handleClose = () => {
        setopen(false)
    }

    return (
        <>
            <AppBar position="sticky" sx={{ background: "#2c2c38", }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6">
                        App Bar
                    </Typography>
                    <Button variant="contained" onClick={handleOpen}>
                        Add Task
                    </Button>
                </Toolbar>
            </AppBar>

            <AddToTask handleClose={handleClose} open={open} />
        </>
    )
}

export default NavBarComp