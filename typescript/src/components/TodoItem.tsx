import styles from './TodoItem.css';
import React from 'react';
import { Todo } from 'src/model/Todo';

type Props = {
  todo: Todo;
  //関数の場合の書き方(引数なし、戻り値なし)
  onClick?: () => void;
};

export const TodoItem: React.FC<Props> = ({ todo, onClick }) => {
  return (
    <div className={styles.todoItem} onClick={onClick}>
      <div className={styles.todoItemTitle}>{todo.title}</div>
      <div className={styles.todoItemDescription}>{todo.description}</div>
    </div>
  );
};
