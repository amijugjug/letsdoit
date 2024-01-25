import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo, setEditReq } from "../state/slices/TodoSlice";
import { useTodoSelectors } from "../state/selectors/TodoSlice.selector";

const AddTodo = () => {
  const dispatch = useDispatch();
  const { isEditReq, editObjId, todoObj } = useTodoSelectors();
  const [showInput, setShowInput] = useState(false);
  const [todo, setTodo] = useState({
    id: uuidv4(),
    title: "",
    description: "",
  });

  const approved = () => {
    return todo.title;
  };

  const resetTodoState = () => {
    const newId = uuidv4();
    setTodo({ id: newId, title: "", description: "" });
  };

  const handleTitleChange = (e) => {
    const _title = e.target.value;
    setTodo({ ...todo, title: _title });
  };

  const handleDescriptionChange = (e) => {
    const _description = e.target.value;
    setTodo({ ...todo, description: _description });
  };

  const onSaveClick = () => {
    if (approved()) {
      dispatch(addTodo({ todo: todo }));
      resetTodoState();
      setShowInput(false);
    }
  };

  const onDiscardClick = () => {
    if (setShowInput) setShowInput(false);
    if (isEditReq) dispatch(setEditReq({ isEditReq: false, editObjId: "" }));
  };

  useEffect(() => {
    if (isEditReq) {
      setTodo(todoObj[editObjId]);
    }
  }, [isEditReq, editObjId, todoObj]);

  return (
    <>
      <div className="flex items-center justify-between min-w-[500px] h-[30px] px-[5px] my-[10px] w-full">
        <p className="self-center font-bold text-lg">Hey, lets add a task 😮‍💨</p>
        <button
          className="border-[1px] rounded-md px-[5px] py-[2px]"
          onClick={() => setShowInput(true)}
        >
          Add a Todo
        </button>
      </div>
      {showInput || isEditReq ? (
        <div className="my-[10px] w-full">
          <TodoCard
            isInput={true}
            closeInput={onDiscardClick}
            todo={todo}
            onSaveClick={onSaveClick}
            handleTitleChange={handleTitleChange}
            handleDescriptionChange={handleDescriptionChange}
          />
        </div>
      ) : null}
    </>
  );
};

export default AddTodo;
