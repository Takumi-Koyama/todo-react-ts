import styles from './TodoEdit.css';
import React from 'react';
import { useParams } from 'react-router-dom';

export const TodoEdit: React.FC = () => {
  const id = useParams<{ id: string }>().id;
  return (
    <div>
      <h1>Todo Edit</h1>
      <input className={styles.todoTitleInput} />
      <textarea className={styles.todoDescriptionInput} />
      <button>save</button>
      <button>delete</button>
    </div>
  );
};
