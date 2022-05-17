/* eslint-disable no-array-constructor */
import { createSlice } from "@reduxjs/toolkit";

export const addSlice = createSlice({
  name: "add",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Math.floor(Math.random() * 100),
        no: action.payload.no,
        kontrol: action.payload.kontrol,
        teklif: action.payload.teklif,
        dummy: action.payload.dummy,
      };
      var taskArray = new Array();
      var arrStr = localStorage.getItem("tasks");
      if (arrStr) {
        taskArray = JSON.parse(arrStr);
      }
      taskArray.push(newTask);
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(taskArray));
    },

    getTasks: (state) => {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      if (tasks) {
        tasks.forEach((element) => {
          state.push(element);
        });
      }
    },

    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTask, getTasks, deleteTask } = addSlice.actions;

export default addSlice.reducer;
