import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface subtask {
    subtask: string
}

interface task {
    title: string;
    descritpion: string;
    status: string;
}


interface CartState {
    tasks: task[];
    subtask: subtask[];
}


const initialState: CartState = {
    tasks: [],
    subtask: [],

}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<task>) => {
            // state.items.push(action.payload);
            state.tasks.push(action.payload)
            console.log(action.payload);

        },

        addSubtask: (state, action: PayloadAction<subtask>) => {
            // console.log(action.payload);
            state.subtask.push(action.payload);
        },
    }
})

// console.log(taskSlice);


export const { addTask, addSubtask } = taskSlice.actions;
export default taskSlice.reducer

// console.log(cartSlice);
