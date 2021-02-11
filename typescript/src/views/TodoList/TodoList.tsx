import styles from './TodoList.css';
import React, { useEffect, useState, useContext } from 'react';
import { Todo } from 'src/model/Todo';
import { TodoItem } from 'src/components/TodoItem';
import Axios, { AxiosResponse } from 'axios';
import { TodoListContext } from 'src/context/TodoListContext';
import { useHistory } from 'react-router-dom';

export const TodoList: React.FC = () => {
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');

  const [todo, setTodo] = useState<Todo>({
    title: '',
    description: '',
  });
  // const [todoList, setTodoList] = useState<Todo[]>([]);
  const { todoList, setTodoList } = useContext(TodoListContext);

  const history = useHistory();

  //コンポーネントのマウント時に発動
  useEffect(() => {
    // const getTodoList = async () => {
    //   const response = await Axios.get<Todo[]>('todos');
    //   setTodoList(response.data);
    // };
    // getTodoList();
    (async () => {
      const response = await Axios.get<Todo[]>('todos');
      setTodoList(response.data);
    })();
  }, [setTodoList]);

  const changedTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    //左側の引数に対して、右側の値をマージする
    const newTodo = Object.assign({}, todo);
    newTodo.title = e.target.value;
    setTodo(newTodo);
  };

  const changedDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //左側の引数に対して、右側の値をマージする
    const newTodo = Object.assign({}, todo);
    newTodo.description = e.target.value;
    setTodo(newTodo);
  };

  const addClick = async () => {
    const response = await Axios.post<Todo, AxiosResponse<string>>(
      'todos',
      todo
    );
    const newTodo = Object.assign({}, todo);
    newTodo.id = parseInt(response.data);

    const newTodoList = todoList.slice();
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  return (
    <>
      <div>
        <input className={styles.todoTitleInput} onChange={changedTitle} />
        <textarea
          className={styles.todoDescriptionInput}
          onChange={changedDescription}
        />
        <div>
          <button className={styles.todoAddButton} onClick={addClick}>
            Click Me!!!
          </button>
        </div>
      </div>
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onClick={() => {
              return history.push(`/edit/${todo.id}`);
            }}
          />
        );
      })}
    </>
  );
};
