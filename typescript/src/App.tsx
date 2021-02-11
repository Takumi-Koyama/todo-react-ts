import styles from './App.css';
import React from 'react';
import { TodoList } from 'src/views/TodoList/TodoList';
import { TodoListProvider } from 'src/context/TodoListContext';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:4000/api/';

export const App: React.FC = () => {
  return (
    <div className={styles.area}>
      <TodoListProvider>
        <TodoList />
      </TodoListProvider>
    </div>
  );
};
