import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import { useTodoSelectors } from "../selectors/todoSlice.selector";

const TodoContainer = () => {
  const { todoObj, totalDoneMarked } = useTodoSelectors();
  const [todos, setTodos] = useState(Object.values(todoObj));

  useEffect(() => {
    setTodos(Object.values(todoObj));
  }, [todoObj]);

  return (
    <div
      className={
        "flex flex-col gap-2 min-h-[100px] max-h-[500px] overflow-scroll relative w-full border-gray-100 border-2 rounded-b-[10px]" +
        (todos.length ? " justify-start" : " justify-center")
      }
    >
      {todos.length ? (
        <div className="flex absolute top-0 bg-slate-400 w-full justify-between px-[5px] py-[10px]">
          <h3 className="self-center font-bold text-md">Task to do </h3>
          <p className="self-center font-bold text-md">
            <span>{todos.length - totalDoneMarked}</span> /{" "}
            <span>{todos.length}</span>
          </p>
        </div>
      ) : null}
      <div className="flex flex-col gap-2 min-h-[100px] max-h-[500px] overflow-scroll relative w-full mt-[60px] px-[10px] mb-[10px]">
        {todos.length ? (
          todos.map((todo) => <TodoCard todo={todo} key={todo.id} />)
        ) : (
          <span className="text-center font-semibold">
            Nothing to do yayyy 🙈
          </span>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
