import React, { useContext } from 'react';
import { Todo, TodoContext } from '../contexts/TodosContext';
import './App.css';
import { Checkbox } from './checkbox/Checkbox';
import { TodoForm } from './todo-form/TodoForm';

const App: React.FC = () => {
  const { todos, toggleTodo } = useContext(TodoContext) as any;

  return (
    <div className="container">
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

      <TodoForm />
    </div>
  );
}

export default App;
