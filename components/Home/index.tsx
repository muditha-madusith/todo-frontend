import React, { useState } from 'react';
import styles from './index.module.css';
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

interface Todo {
  id: number;
  text: string;
}

const HomeIndex = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

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
          {todos.map(todo => (
            <div key={todo.id} className={styles.tod}>
              {todo.text}
              <div className={styles.delI} onClick={() => handleDeleteTodo(todo.id)}>
                <MdDelete />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeIndex;
