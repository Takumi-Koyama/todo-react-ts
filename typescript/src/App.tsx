import styles from './App.css';
import React from 'react';
import { TodoList } from './views/TodoList/TodoList';

export const App: React.FC = () => {
  return (
    <div className={styles.area}>
      <TodoList />
    </div>
  );
};
