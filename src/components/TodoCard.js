import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  setEditReq,
  toggleDoneStatus,
} from "../state/slices/TodoSlice";

const TodoCard = ({
  todo = null,
  isInput = false,
  handleTitleChange = () => null,
  handleDescriptionChange = () => null,
  onSaveClick = () => null,
  closeInput = () => null,
}) => {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(todo.markedAsDone);

  const deleteTodo = () => {
    dispatch(removeTodo({ id: todo.id }));
  };

  const handleMarKDoneButtonClick = () => {
    dispatch(toggleDoneStatus({ id: todo.id, toggleValue: !toggle }));
    setToggle((prevToggle) => !prevToggle);
  };

  const handleEditRequest = () => {
    dispatch(setEditReq({ isEditReq: true, editObjId: todo.id }));
  };

  return (
    <div className="flex flex-col min-w-[500px] border-2 border-solid border-indigo-500 rounded-md">
      <div className="flex justify-between px-[5px] py-[10px] border-b-[1px] bg-[#2BAE66FF]">
        {isInput ? (
          <input
            className="w-[300px] rounded-[5px] outline-none"
            value={todo.title}
            placeholder="Enter title"
            onChange={handleTitleChange}
          />
        ) : (
          <p className="self-center font-bold text-lg">{todo.title}</p>
        )}

        {isInput ? (
          <div className="flex justify-between gap-1">
            <button
              className="border-[1px] rounded-md px-[5px] py-[2px] text-white hover:text-[#FFE77AFF]"
              onClick={onSaveClick}
            >
              Save
            </button>
            <button
              className="border-[1px] rounded-md px-[5px] py-[2px] text-white hover:text-[#FFE77AFF]"
              onClick={closeInput}
            >
              Discard
            </button>
          </div>
        ) : (
          <div className="flex justify-between gap-1">
            <button
              className="border-[1px] rounded-md px-[5px] py-[2px] text-white hover:text-[#FFE77AFF]"
              onClick={handleEditRequest}
            >
              Edit
            </button>
            <button
              className="border-[1px] rounded-md px-[5px] py-[2px] text-white hover:text-[#FFE77AFF]"
              onClick={deleteTodo}
            >
              Delete
            </button>
            <button
              className="border-[1px] rounded-md px-[5px] py-[2px] text-white hover:text-[#FFE77AFF]"
              onClick={handleMarKDoneButtonClick}
            >
              {toggle ? "Still To Do" : "Mark as Done"}
            </button>
          </div>
        )}
      </div>
      <div className="min-h-[100px] px-[5px] py-[10px] bg-[#FCF6F5FF]">
        {isInput ? (
          <textarea
            value={todo.description}
            placeholder="Enter description"
            className="w-full min-h-[75px] outline-none rounded-md"
            onChange={handleDescriptionChange}
          />
        ) : (
          <p className="text-md font-semibold">{todo.description}</p>
        )}
      </div>
    </div>
  );
};

export default TodoCard;
