export const GET_TODOS_LOADING = "GET_TODOS_LOADING";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";

export const CREATE_TODO_LOADING = "CREATE_TODO_LOADING";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const CREATE_TODO_FAILED = "CREATE_TODO_FAILED";

export const DELETE_TODO_LOADING = "DELETE_TODO_LOADING";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILED = "DELETE_TODO_FAILED";

export interface TodoState {
  todo?: Todo;
  createTodo?: CreateTodo;
  deleteTodo?: DeleteTodo;
}

export interface Todo {
  loading: boolean;
  todos: [];
}

export interface CreateTodo {
  loading: boolean;
  success: boolean;
}

export interface DeleteTodo {
  loading: boolean;
  success: boolean;
}

//Get Todos
export interface GetTodosLoading {
  type: typeof GET_TODOS_LOADING;
}
export interface GetTodosFailed {
  type: typeof GET_TODOS_FAILED;
}
export interface GetTodosSuccess {
  type: typeof GET_TODOS_SUCCESS;
  payload: Todo;
}

export interface CreateTodoLoading {
  type: typeof CREATE_TODO_LOADING;
}
export interface CreateTodoFailed {
  type: typeof CREATE_TODO_FAILED;
}
export interface CreateTodoSuccess {
  type: typeof CREATE_TODO_SUCCESS;
}

export interface DeleteTodoLoading {
  type: typeof DELETE_TODO_LOADING;
}
export interface DeleteTodoFailed {
  type: typeof DELETE_TODO_FAILED;
}
export interface DeleteTodoSuccess {
  type: typeof DELETE_TODO_SUCCESS;
}

export type TodoDispatchTypes =
  | GetTodosLoading
  | GetTodosFailed
  | GetTodosSuccess
  | CreateTodoLoading
  | CreateTodoFailed
  | CreateTodoSuccess
  | DeleteTodoLoading
  | DeleteTodoFailed
  | DeleteTodoSuccess;
