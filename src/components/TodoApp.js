import React from "react";
import AddTodo from "./AddTodo";
import TodoContainer from "./TodoContainer";

const TodoApp = () => {
  return (
    <div className="flex flex-col max-w-[600px] items-center p-[10px]">
      <AddTodo />
      <TodoContainer />
    </div>
  );
};

export default TodoApp;
