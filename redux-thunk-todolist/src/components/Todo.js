import React from "react";
import "./Todo.css";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { removeTodo, handleCheckbox } from "../redux/todoapp/actions";

export const Todo = ({ handleEditClick, editFormVisibility }) => {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos from the store
  const todos = useSelector((state) => state.operationsReducer);
  return todos.map((todo) => (
    <div key={todo.id} className="todoItem">
      <div className="todoItem">
        {editFormVisibility === false && (
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(handleCheckbox(todo.id))}
          ></input>
        )}
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div className="icon">
        {editFormVisibility === false && (
          <>
            <span onClick={() => handleEditClick(todo)}>
              <Icon icon={edit2} />
            </span>
            <span onClick={() => dispatch(removeTodo(todo.id))}>
              <Icon icon={trash} />
            </span>
          </>
        )}
      </div>
    </div>
  ));
};
