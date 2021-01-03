import { Fragment, useState } from 'react';
import './TodoList.css';
//Todoitem.jsをインポートする
import TodoItem from '../../components/TodoItem'

const sampleTodoList = [
  {
    id: 0,
    title: 'これはサンプル1です',
    description: 'これはサンプル1です',
  },
  {
    id: 1,
    title: 'これはサンプル2です',
    description: 'これはサンプル2です',
  },
];

const TodoList = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todoList, setTodoList] = useState(sampleTodoList);

  // const todoList = sampleTodoList;

  const changedTitle = (e) => {
    setTitle(e.target.value);
  }

  const changedDescription = (e) => {
    setDescription(e.target.value);
  }

  const clickedButton = () => {
    // alert(text+description);
    // alert(`title: ${title} description: ${description}`);
    //...これ何w
    const newId = Math.max(...todoList.map((todo) => todo.id)) + 1;
    //インスタンスを新しく作り直さないと反映されないニューなんとか
    const newTodoList = todoList.slice();
    const newTodo = {
      id: newId,
      title: title,
      description: description,
    };
    //配列に追加
    newTodoList.push(newTodo);
    //更新
    setTodoList(newTodoList);
    //ボタンを押した後に入力欄を空にする
    setTitle('');
    setDescription('');
  }

  return (
  <Fragment>
    <div>
      <input className="todo-title-input" type="text" value={title} onChange={changedTitle}/>
      <br />
      <textarea className="todo-description-input" value={description} onChange={changedDescription}></textarea>
      <br />
    </div>

    <div>
      <button className="todo-add-button" onClick={clickedButton}>Click Me!!!</button>
    </div>

    {todoList.map((todo) => {
      return (<TodoItem todo={todo} key={todo.id} />);
    })}
  </Fragment>
  );
}

export default TodoList;
