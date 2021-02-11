import styles from './App.css';
import React from 'react';
import { TodoList } from 'src/views/TodoList/TodoList';
import { TodoListProvider } from 'src/context/TodoListContext';
import Axios from 'axios';
import { TodoEdit } from 'src/views/TodoEdit/TodoEdit';
import { BrowserRouter as Router, Route } from 'react-router-dom';

Axios.defaults.baseURL = 'http://localhost:4000/api/';

export const App: React.FC = () => {
  return (
    <div className={styles.area}>
      <TodoListProvider>
        <Router>
          <Route exact path="/" component={TodoList} />
          <Route path="/edit/:id" component={TodoEdit} />
        </Router>
      </TodoListProvider>
    </div>
  );
};
