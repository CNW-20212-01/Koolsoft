import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEditSubmit } from "../redux/todoapp/actions";
import "./Form.css";

export const Form = ({ editFormVisibility, editTodo, cancelUpdate }) => {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // todo value state for normal add todo form
  const [todoValue, setTodoValue] = useState("");

  // state for if someone changes the (to edit) value in update form
  const [editValue, setEditValue] = useState("");

  // useEffect is to show the (to edit) value in update form
  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  // normal add todo submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  // update form submit
  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch(handleEditSubmit(editedObj));
  };

  return (
    <>
      {editFormVisibility === false ? (
        <form className="input" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
            placeholder="Add your Todo-item"
          />
          <button className="button" type="submit">
            ADD
          </button>
        </form>
      ) : (
        <form className="input" onSubmit={editSubmit}>
          <input
            type="text"
            required
            value={editValue || ""}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button className="button" type="submit">
            UPDATE
          </button>

          <button className="button" type="button" onClick={cancelUpdate}>
            BACK
          </button>
        </form>
      )}
    </>
  );
};
