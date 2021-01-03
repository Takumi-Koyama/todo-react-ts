import { Fragment, useState, useContext } from 'react';
import './TodoList.css';
import { TodoListContext } from '../../context/TodoListContext'
//Todoitem.jsをインポートする
import TodoItem from '../../components/TodoItem'
import { useHistory } from 'react-router-dom'

const TodoList = () => {
  const [title, setTitle] = useState('');
  const {todoList, setTodoList} = useContext(TodoListContext);
  const [description, setDescription] = useState('');

  // const [todoList, setTodoList] = useState([]);
  const history = useHistory();
  // const todoList = sampleTodoList;

  const changedTitle = (e) => {
    setTitle(e.target.value);
  }

  const changedDescription = (e) => {
    setDescription(e.target.value);
  }

  const clickedButton = () => {
    let newId = 0;
    if(todoList.length === 0) {
      const newId = Math.max(...todoList.map((todo) => todo.id)) + 1;
    }
    // alert(text+description);
    // alert(`title: ${title} description: ${description}`);
    //...これ何w
    // const newId = Math.max(...todoList.map((todo) => todo.id)) + 1;
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
      return (<TodoItem 
        todo={todo} 
        key={todo.id} 
        onClick={() => history.push(`/edit/${todo.id}`)} />);
    })}
  </Fragment>
  );
}

export default TodoList;
