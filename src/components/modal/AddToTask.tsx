import Backdrop from '@mui/material/Backdrop'
import { Box, Typography, FormControl, InputLabel, Button, FormLabel, FormHelperText, MenuItem, Select, Chip, Stack, ListItem } from '@mui/material'
import Modal from '@mui/material/Modal'
import { styled } from '@mui/material/styles';
import React, { useState } from 'react'
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper'
import InputBaseComp from './InputBaseComp'
import DeleteIcon from '@mui/icons-material/Delete';
import SelectComp from './SelectComp'
import SubTask from './SubTask'
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
    FieldArray
} from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '@/redux/features/taskSlice';



type Props = {
    handleClose: () => void, open: boolean
}


interface subtask {
    task: string
}

interface MyFormValues {
    description: string;
    title: string;
    status: string;
    subtasks: subtask[""]
}


function AddToTask({ handleClose, open }: Props) {


    const status = ["Todo", "Doing", "Done"]

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

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1),
            borderRadius: theme.shape.borderRadius,
            border: "1px solid #444450",

        },
    }));

    const StyledSelect = styled(Select)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1),
            borderRadius: theme.shape.borderRadius,
            border: "1px solid #444450",

        },
    }));


    const initialValues: MyFormValues = {
        description: '',
        title: "",
        status: "",
        subtasks: [""]

        // subtasks: [""],
    };

    const [subtaskModal, setsubTaskModal] = useState(false)

    const dispatch = useDispatch()

    // const tasks = useSelector((store) => {
    //     console.log(store);
    // })

    // console.log(subtasks);

    // const x = [1, 2, 3, 1, 4, 5]

    // console.log(x.slice(1));


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                disableAutoFocus

                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >

                <Paper sx={{ ...style, width: "86%", maxWidth: 400 }}>
                    <Typography variant="h6" sx={{ fontSize: "1rem" }} >
                        Add New Task
                    </Typography>

                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            dispatch(addTask(values))

                        }}
                    >



                        {(props: FormikProps<any>) => (

                            <Form>

                                <Field name="title" >

                                    {

                                        ({ field, // { name, value, onChange, onBlur }
                                            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                            meta, }) => (
                                            <FormControl sx={{ width: "100%", marginBlock: "0.5rem" }}>
                                                <FormLabel sx={{ color: "white", padding: "0.2rem", fontSize: "0.8rem" }}>Title</FormLabel>
                                                <StyledInputBase multiline rows={0} {...field} />
                                                <FormHelperText></FormHelperText>
                                            </FormControl>
                                        )
                                    }
                                </Field>

                                <Field name="description" >

                                    {

                                        ({ field, // { name, value, onChange, onBlur }
                                            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                            meta, }) => (
                                            <FormControl sx={{ width: "100%", marginBlock: "0.5rem" }}>
                                                <FormLabel sx={{ color: "white", padding: "0.2rem", fontSize: "0.8rem" }}>Description</FormLabel>
                                                <StyledInputBase multiline rows={2} {...field} />
                                                <FormHelperText></FormHelperText>
                                            </FormControl>
                                        )
                                    }
                                </Field>


                                <Button onClick={() => { setsubTaskModal(true) }} type='button' fullWidth variant="contained" sx={{ color: "#645fc6", background: "white", textTransform: "capitalize", borderRadius: "1.5rem", "&:hover": { color: "#645fc6", background: "#E7E3E3", } }}>
                                    Add Subtask
                                </Button>

                                {/* subModal */}


                                <Box sx={{ padding: "0.5rem" }}>
                                    <FieldArray name="subtasks" >

                                        {

                                            (fieldArrayProps) => {
                                                const { push, remove, form } = fieldArrayProps;
                                                const { values } = form;
                                                const { subtasks } = values;


                                                {
                                                    // console.log(subtask);
                                                }

                                                return (
                                                    <>

                                                        {
                                                            subtasks.map((subtask, idx) => (
                                                                <ListItem key={idx} >

                                                                    {/* <div style={{ display: ` none` }}> */}
                                                                    <Chip

                                                                        sx={{ color: "RGBA(255, 255, 255, 0.7)", marginY: "0.2rem", justifyContent: "space-between", }}
                                                                        label={subtask}

                                                                        deleteIcon={<DeleteIcon sx={{ color: "white" }} />}
                                                                        variant="outlined"
                                                                        onClick={() => { }}
                                                                        onDelete={() => { remove(idx) }}
                                                                    />
                                                                    {/* </div> */}



                                                                    <Modal
                                                                        aria-labelledby="transition-modal-title"
                                                                        aria-describedby="transition-modal-description"
                                                                        open={subtaskModal}
                                                                        // onClose={handleClose}
                                                                        closeAfterTransition
                                                                        disableAutoFocus
                                                                    >

                                                                        <Paper sx={{ width: 350, height: 150, ...style }}>
                                                                            <Field name={`subtasks[${idx}]`}>
                                                                                {
                                                                                    ({ field }) => (
                                                                                        <FormControl sx={{ width: "100%", marginBlock: "0.5rem" }}>
                                                                                            <FormLabel sx={{ color: "white", padding: "0.2rem", fontSize: "0.8rem" }}>Subtask</FormLabel>
                                                                                            <StyledInputBase multiline rows={0} {...field} name={`subtasks[${idx}]`} />
                                                                                            <FormHelperText></FormHelperText>
                                                                                        </FormControl>
                                                                                    )
                                                                                }
                                                                            </Field>
                                                                            <Button
                                                                                onClick={() => {
                                                                                    console.log(values);
                                                                                    push("");
                                                                                    setsubTaskModal(false)

                                                                                }}
                                                                                type='button' fullWidth variant="contained" sx={{ background: "#645fc6", textTransform: "capitalize", borderRadius: "1.5rem" }}>
                                                                                Create Subtask
                                                                            </Button>
                                                                        </Paper>
                                                                    </Modal>
                                                                </ListItem >

                                                            ))
                                                        }

                                                    </>
                                                )
                                            }



                                        }
                                    </FieldArray>
                                </Box>


                                {/* </Modal > */}

                                <Field name="status" as="select">
                                    {

                                        ({ field, // { name, value, onChange, onBlur }
                                            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                            meta, }) => (
                                            <FormControl sx={{ width: "100%", marginBlock: "0.5rem" }}>
                                                <FormLabel sx={{ color: "white", padding: "0.2rem", fontSize: "0.8rem" }}>Status</FormLabel>
                                                <StyledSelect {...field}>
                                                    {
                                                        status.map((stat) => (
                                                            <MenuItem key={stat} value={stat}>{stat}</MenuItem>
                                                        ))
                                                    }
                                                </StyledSelect>
                                                <FormHelperText></FormHelperText>
                                            </FormControl>
                                        )
                                    }

                                </Field>


                                <Button type='submit' fullWidth variant="contained" sx={{ background: "#645fc6", textTransform: "capitalize", borderRadius: "1.5rem" }}>
                                    Create Task
                                </Button>

                            </Form>)}



                    </Formik>
                </Paper>

            </Modal>

        </div >
    )
}

export default AddToTask



