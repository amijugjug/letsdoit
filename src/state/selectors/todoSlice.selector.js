import { useSelector } from "react-redux";
import todoReducers from "../state/slices/TodoSlice";

export const useTodoSelectors = () => {
  const todoObj = useSelector((state) => state.todoReducers.todoObj);
  const totalDoneMarked = useSelector(
    (state) => state.todoReducers.totalDoneMarked
  );
  const isEditReq = useSelector((state) => state.todoReducers.isEditReq);
  const editObjId = useSelector((state) => state.todoReducers.editObjId);

  return {
    todoObj,
    totalDoneMarked,
    isEditReq,
    editObjId,
  };
};
