import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    return response.data;
});

export const addTask = createAsyncThunk("tasks/addTask", async (newTask) => {
    const response = await axios.post("http://localhost:3001/tasks", {
        name: newTask,
    });
    return response.data;
});

export const toggleTask = createAsyncThunk("tasks/toggleTask", async (task) => {
    const response = await axios.put(`http://localhost:3001/tasks/${task.id}`, {
        completed: !task.completed,
    });
    return response.data;
});

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
            })
            .addCase(toggleTask.fulfilled, (state, action) => {
                const taskIndex = state.tasks.findIndex(
                    (task) => task.id === action.payload.id
                );
                state.tasks[taskIndex] = action.payload;
            });
    },
});

export default taskSlice.reducer;
