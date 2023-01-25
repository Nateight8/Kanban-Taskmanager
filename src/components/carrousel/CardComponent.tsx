import React, { useState } from 'react'
import { Card, CardActionArea, CardContent, Modal, Typography, Paper, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, Backdrop, Button } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { addSubtask, addTask } from '@/redux/features/taskSlice';


type Props = { task: { title: string, subtasks: [] } }

function CardComponent({ task }: Props) {

    const { title, subtasks, description } = task
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

        bgcolor: '#2c2c38',
        color: "White",
        // border: '2px solid #000',
        boxShadow: 24,
        p: 2,
    };


    const [open, setOpen] = useState(false)
    const [checked, setChecked] = useState([0])

    const handleToggle = (subtask: number) => () => {
        const currentIndex = checked.indexOf(subtask);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(subtask);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        // console.log(" new checked:" + newChecked);
        // console.log("subtask:" + subtask);
        console.log(checked);

    };

    console.log(checked);
    let checkVal = checked.length - 1

    const dispatch = useDispatch()

    const subTaskArray = useSelector((store) => {
        return (store.storeTasks.subtask)
    })

    console.log(subTaskArray);


    return (
        <>
            <Card sx={{ maxWidth: "100%", background: "#2c2c38", marginY: "1rem" }}>
                <CardActionArea onClick={() => { console.log(task); setOpen(true) }}>

                    <CardContent sx={{ color: "whitesmoke" }}>
                        <Typography gutterBottom variant="h6" sx={{ fontSize: "1rem", fontWeight: 300, opacity: 0.8 }}>
                            {title}
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.6, fontWeight: 300 }} >
                            {checked.length - 1} of {subtasks.length}
                        </Typography>
                    </CardContent>

                </CardActionArea>

            </Card>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
                closeAfterTransition
                disableAutoFocus

                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Paper sx={{ ...style, width: "86%", maxWidth: 400 }}>
                    <Box sx={{ paddingY: "0.5rem" }}>
                        <Typography variant="h6" fontSize={14} >
                            {title}
                        </Typography>
                    </Box>
                    <Box sx={{}}>
                        <Typography variant="body1" fontWeight={100} sx={{ opacity: 0.6, fontSize: "0.8rem" }} >
                            {description}
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ paddingTop: "1.24rem", fontSize: "0.8rem" }} >
                        Subtasks (  {checked.length - 1} of {subtasks.length})
                    </Typography>
                    <List>
                        {
                            subtasks.map((subtask) => (
                                <ListItem key={subtask} disablePadding sx={{ background: "#21212d", marginY: "0.5rem" }}>
                                    <ListItemButton onClick={handleToggle(subtask)}>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(subtask) !== -1}
                                                // tabIndex={-1}
                                                disableRipple
                                            // inputProps={{ 'aria-labelledby' }}

                                            />
                                        </ListItemIcon>
                                        <ListItemText primary={subtask} />
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }


                        <ListItem disablePadding sx={{ marginY: "0.5rem", border: "1px solid rgba(136,142,157, 0.2)" }}>
                            <ListItemButton disableRipple >
                                {checkVal === 0 ? "Todo" : checkVal < subtasks.length ? "Doing" : "Done"}
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Button fullWidth variant="contained" sx={{ textTransform: "capitalize", borderRadius: 0 }} onClick={() => { dispatch(addSubtask([...checked])) }}>
                        Update Status
                    </Button>
                </Paper>
            </Modal>
        </>
    )
}

export default CardComponent


