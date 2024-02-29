import { Dispatch } from "redux";
import axios from "axios";
import {
  TodoDispatchTypes,
  GET_TODOS_LOADING,
  GET_TODOS_FAILED,
  GET_TODOS_SUCCESS,
  CREATE_TODO_LOADING,
  CREATE_TODO_FAILED,
  CREATE_TODO_SUCCESS,
  DELETE_TODO_LOADING,
  DELETE_TODO_FAILED,
  DELETE_TODO_SUCCESS,
} from "@/redux/types/TodoActionTypes";

export const getTodos = () => async (dispatch: Dispatch<TodoDispatchTypes>) => {
  console.log("Get todos action called.....");
  dispatch({
    type: GET_TODOS_LOADING,
  });
  // console.log(process.env.BACKEND_BASE_URL)
  await axios
    .get(`http://localhost:3001/api/todos`)
    .then((res) => {
      console.log(res.data, "todosssssss");
      dispatch({
        type: GET_TODOS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "err in getting todos..");
      dispatch({
        type: GET_TODOS_FAILED,
      });
    });
};

export const createToDo =
  (todo: string) => async (dispatch: Dispatch<TodoDispatchTypes>) => {
    console.log("Create todo action called......");
    dispatch({
      type: CREATE_TODO_LOADING,
    });
    await axios
      .post(`http://localhost:3001/api/todos`, { todo })
      .then((res) => {
        console.log(res.data, "Create todo success.....");
        dispatch({
          type: CREATE_TODO_SUCCESS,
        });
      })
      .catch((err) => {
        console.log(err, "Error in create todo....");
        dispatch({
          type: CREATE_TODO_FAILED,
        });
      });
  };


  export const deleteToDo =
  (id: string) => async (dispatch: Dispatch<TodoDispatchTypes>) => {
    console.log("Delete todo action called......");
    dispatch({
      type: DELETE_TODO_LOADING,
    });
    await axios
      .delete(`http://localhost:3001/api/todos/${id}`)
      .then((res) => {
        console.log(res.data, "Delete todo success.....");
        dispatch({
          type: DELETE_TODO_SUCCESS,
        });
      })
      .catch((err) => {
        console.log(err, "Error in Delete todo....");
        dispatch({
          type: DELETE_TODO_FAILED,
        });
      });
  };