import styles from './TodoList.css';
import React, { useEffect, useState } from 'react';
import { Todo } from 'src/model/Todo';
import { TodoItem } from 'src/components/TodoItem';
import Axios from 'axios';

export const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  //コンポーネントのマウント時に発動
  useEffect(() => {
    const getTodoList = async () => {
      const response = await Axios.get<Todo[]>('todos');
      setTodoList(response.data);
    };
    getTodoList();
  }, [setTodoList]);

  return (
    <>
      <div>
        <input className={styles.todoTitleInput} />
        <textarea className={styles.todoDescriptionInput} />
        <div>
          <button className={styles.todoAddButton}>Click Me!!!</button>
        </div>
      </div>
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};
