import styles from './App.css';
import React from 'react';
import { TodoList } from 'src/views/TodoList/TodoList';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:4000/api/';

export const App: React.FC = () => {
  return (
    <div className={styles.area}>
      <TodoList />
    </div>
  );
};
