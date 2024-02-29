import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "./index.module.css";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

import { AppActions } from "@/redux/actions/AppActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "@/redux/store";
import { createToDo, deleteToDo, getTodos } from "@/redux/actions/TodoActions";
import { TodoState } from "@/redux/types/TodoActionTypes";

interface Todo {
  _id: string;
  todo: string;
}

interface LinkStateProps {
  todos: TodoState;
}

interface LinkDispatchProps {
  getTodos: () => void;
  createToDo: (todo: string) => void;
  deleteToDo: (id: string) => void;
}

interface ComponentsProps {}

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;

const HomeIndex: FunctionComponent<Props> = ({
  getTodos,
  createToDo,
  deleteToDo,
  todos: { todo, createTodo, deleteTodo
   },
}) => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    createToDo(inputValue);
    setInputValue("");
  };

  const handleDeleteTodo = (id: string) => {
    deleteToDo(id);
  };

  useEffect(() => {
    getTodos();
  }, [createTodo, deleteTodo]);
  
  useEffect(() => {
    if (todo) {
      setTodos(todo.todos);
    }
  }, [todo]);
  
  return (
    <div className={styles.main}>
      <div className={styles.toBox}>
        <div className={styles.top}>
          <input
            type="text"
            className={styles.input}
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your todo..."
          />
          <div className={styles.addIcon} onClick={handleAddTodo}>
            <FaPlus />
          </div>
        </div>
        <div className={styles.display}>
          {todos.map((todo) => (
            <div key={todo._id} className={styles.tod}>
              {todo.todo}
              <div
                className={styles.delI}
                onClick={() => handleDeleteTodo(todo._id)}
              >
                <MdDelete />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState): LinkStateProps => ({
  todos: state.todo,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  getTodos: bindActionCreators(getTodos, dispatch),
  createToDo: bindActionCreators(createToDo, dispatch),
  deleteToDo: bindActionCreators(deleteToDo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);
