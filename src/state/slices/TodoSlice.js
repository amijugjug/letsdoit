import { createSlice } from "@reduxjs/toolkit";

const inititalState = {
  todoObj: {},
  isEditReq: false,
  editObjId: "",
  totalDoneMarked: 0,
};

const getTodo = (id, title, description, markDone) => {
  return {
    id: id,
    title: title,
    description: description,
    markedAsDone: markDone,
  };
};

const todoSlice = createSlice({
  name: "todo",
  initialState: inititalState,
  reducers: {
    addTodo: (state, action) => {
      const _todo = getTodo(
        action.payload.todo.id,
        action.payload.todo.title,
        action.payload.todo.description,
        false
      );
      state.todoObj[action.payload.todo.id] = _todo;
      state.isEditReq = false;
    },
    removeTodo: (state, action) => {
      delete state.todoObj[action.payload.id];
    },
    setEditReq: (state, action) => {
      state.isEditReq = action.payload.isEditReq;
      state.editObjId = action.payload.editObjId;
    },
    toggleDoneStatus: (state, action) => {
      if (action.payload.toggleValue) state.totalDoneMarked++;
      else state.totalDoneMarked--;
      state.todoObj[action.payload.id].markedAsDone =
        action.payload.toggleValue;
    },
  },
});

export const { addTodo, removeTodo, setEditReq, toggleDoneStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
