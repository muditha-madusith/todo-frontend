import {
  TodoState,
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

const initialState: TodoState = {
  todo: {
    loading: false,
    todos: [],
  },
  createTodo: {
    loading: false,
    success: false,
  },
  deleteTodo: {
    loading: false,
    success: false,
  },
};

const todoReducer = (
  state: TodoState = initialState,
  action: TodoDispatchTypes
) => {
  switch (action.type) {
    case GET_TODOS_LOADING:
      console.log("get todos loading");
      return {
        ...state,
        todo: {
          loading: true,
          todos: [],
        },
      };

    case GET_TODOS_FAILED:
      console.log("get todos failed");
      return {
        ...state,
        todo: {
          loading: false,
          todos: [],
        },
      };

    case GET_TODOS_SUCCESS:
      console.log("get todos success");
      return {
        ...state,
        todo: {
          loading: false,
          todos: action.payload,
        },
      };

    case CREATE_TODO_LOADING:
      console.log("create todo loading");
      return {
        ...state,
        createTodo: {
          loading: true,
          success: false,
        },
      };

    case CREATE_TODO_FAILED:
      console.log("create todo failed");
      return {
        ...state,
        createTodo: {
          loading: false,
          success: false,
        },
      };

    case CREATE_TODO_SUCCESS:
      console.log("create todo success");
      return {
        ...state,
        createTodo: {
          loading: false,
          success: true,
        },
      };

    case DELETE_TODO_LOADING:
      console.log("delete todo loading");
      return {
        ...state,
        deleteTodo: {
          loading: true,
          success: false,
        },
      };

    case DELETE_TODO_FAILED:
      console.log("deelete todo failed");
      return {
        ...state,
        deleteTodo: {
          loading: false,
          success: false,
        },
      };

    case DELETE_TODO_SUCCESS:
      console.log("delete todo success");
      return {
        ...state,
        deleteTodo: {
          loading: false,
          success: true,
        },
      };

    default:
      return state;
  }
};

export default todoReducer;
