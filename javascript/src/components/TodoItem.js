//rfce入力後[tab]で自動入力
//アロー関数に書き換え
import React from 'react'
import './TodoItem.css'
// const obj = {
//   name: "hajime",
//   hobby: "game",
//   birthDay: "1993/01/28"
// }
// const { name, hobby } = obj;
    
const TodoItem = ({todo, onClick}) => {
  return (
    <div className="todo-item" onClick={onClick}>
      <div className="todo-item-title">{todo.title}</div>
      <div className="todo-item-description">{todo.description}</div>
    </div>
  )
}

export default TodoItem
