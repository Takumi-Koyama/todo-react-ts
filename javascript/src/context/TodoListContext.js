import React, { useState } from 'react'

export const TodoListContext = React.createContext({});

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

export const TodoListProvider = ( { children } ) => {
  const [todoList, setTodoList] = useState(sampleTodoList);
  return (
    <TodoListContext.Provider 
      value={{
           todoList,
        setTodoList,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
}