import styles from './TodoEdit.css';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Todo } from 'src/model/Todo';

export const TodoEdit: React.FC = () => {
  const id = useParams<{ id: string }>().id;
  const [todo, setTodo] = useState<Todo>({
    title: '',
    description: '',
  });

  const history = useHistory();

  useEffect(() => {
    (async () => {
      const response = await Axios.get<Todo>(`todos/${id}`);
      setTodo(response.data);
    })();
  }, [id, setTodo]);

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

  const saveClick = async () => {
    const response = await Axios.put(`todos/${id}`, todo);
    if (response.status !== 200) {
      alert('更新に失敗しました');
      return;
    }
    history.push('/');
  };

  const deleteClick = async () => {
    const response = await Axios.delete(`todos/${id}`);
    if (response.status !== 204) {
      alert('削除に失敗しました');
      return;
    }
    history.push('/');
  };

  return (
    <div>
      <h1>Todo Edit</h1>
      <input
        className={styles.todoTitleInput}
        value={todo.title}
        onChange={changedTitle}
      />
      <textarea
        className={styles.todoDescriptionInput}
        value={todo.description}
        onChange={changedDescription}
      />
      <button onClick={saveClick}>save</button>
      <button onClick={deleteClick}>delete</button>
    </div>
  );
};
