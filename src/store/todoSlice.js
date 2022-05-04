import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import todoApi from "../service/todoApi";

export const getAllTaskAsync = createAsyncThunk("todos/getALl", async () => {
  const response = await todoApi.getAllTodo();
  return response.data;
});

export const addNewTaskAsync = createAsyncThunk(
  "todos/addNewTask",
  async (newTask) => {
    const response = await todoApi.addTodo(newTask);
    return response.data;
  }
);

export const deleteTaskAsync = createAsyncThunk(
  "todos/deteleTaskAsync",
  async (id) => {
    const response = await todoApi.deleteTodo(id);
    return response.data;
  }
);

export const editTaskAsync = createAsyncThunk(
  "todos/editTaskAsync",
  async (editData) => {
    const { id, data } = editData;
    const response = await todoApi.editTodo(id, data);
    return response.data;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
    loadingButton: false,
    error: "Ooop! Check you network!",
    loadingEdit: false,
    loadingDelete: false,
  },

  reducers: {
    addTask: (state, action) => {
      state.todos.unshift(action.payload);
    },

    deleleTask: (state, action) => {
      const delTask = action.payload;
      const findIdx = state.todos.findIndex((item) => item.id === delTask.id);
      state.todos.splice(findIdx, 1);
    },

    editTask: (state, action) => {
      const editTask = action.payload;
      const findIdx = state.todos.findIndex((item) => item.id === editTask.id);
      state.todos[findIdx] = editTask;
    },
  },

  extraReducers: {
    // ____________________________________ GET ALL TASK
    [getAllTaskAsync.pending]: (state) => {
      state.loading = true;
    },
    [getAllTaskAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getAllTaskAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    },

    // ___________________________________ ADD NEW TASK
    [addNewTaskAsync.pending]: (state) => {
      state.loadingButton = true;
    },
    [addNewTaskAsync.rejected]: (state) => {
      state.loadingButton = false;
    },
    [addNewTaskAsync.fulfilled]: (state, action) => {
      state.loadingButton = false;
      todoSlice.caseReducers.addTask(state, action);
    },

    // ___________________________________ DELETE TASK
    [deleteTaskAsync.pending]: (state) => {
      state.loadingDelete = true;
    },
    [deleteTaskAsync.rejected]: (state) => {
      state.loadingDelete = false;
    },
    [deleteTaskAsync.fulfilled]: (state, action) => {
      state.loadingDelete = false;
    },

    // ___________________________________ EDIT TASK
    [editTaskAsync.pending]: (state) => {
      state.loadingEdit = true;
    },
    [editTaskAsync.rejected]: (state) => {
      state.loadingEdit = false;
    },
    [editTaskAsync.fulfilled]: (state, action) => {
      state.loadingEdit = false;
      todoSlice.caseReducers.editTask(state, action);
    },
  },
});

const { reducer, actions } = todoSlice;
export const { deleleTask: deleteTaskAction } = actions;

export default reducer;
