import React, { useContext } from 'react';
import uuid from 'uuid/v1';
import { Todo, TodoContext } from '../contexts/TodosContext';

const App: React.FC = () => {
  const { todos, addTodo } = useContext(TodoContext) as any;
  const addNewTodo = () => {
    const id = uuid();
    addTodo({ description: `Another todo - ${id.split('-')[0]}`, done: false, id: id });
  };

  return (
    <div>
      <h1>List of todos</h1>
      <ol>
        {todos.map((todo: Todo) => {
          return <li key={todo.id}>{todo.description} - {todo.done ? 'done' : 'not done'}</li>
        })}
      </ol>

      <button onClick={addNewTodo}>Add new todo</button>
    </div>
  );
}

export default App;
