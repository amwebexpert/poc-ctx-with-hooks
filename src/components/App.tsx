import React, { useContext } from 'react';
import uuid from 'uuid/v1';
import { Todo, TodoContext } from '../contexts/TodosContext';
import './App.css';
import { Checkbox } from './checkbox/Checkbox';

const App: React.FC = () => {
  const { todos, addTodo, toggleTodo } = useContext(TodoContext) as any;
  const addNewTodo = () => {
    const id = uuid();
    addTodo({ description: `Another todo - ${id.split('-')[0]}`, done: false, id: id });
  };

  return (
    <div>
      <h1>List of todos</h1>
      <ul>
        {todos.map((todo: Todo) => {
          return (
            <li key={todo.id} className="todo clickable-item" onClick={() => toggleTodo(todo.id)}>
              <Checkbox selected={todo.done} />
              <span className={todo.done ? 'completed' : 'not-completed'}>
                {todo.description}
              </span>
            </li>
          );
        })}
      </ul>

      <button onClick={addNewTodo}>Add new todo</button>
    </div>
  );
}

export default App;
