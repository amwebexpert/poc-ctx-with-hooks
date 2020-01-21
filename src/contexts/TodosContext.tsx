import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export interface Todo {
    description: string;
    done: boolean;
    id: string;
}

export interface TodosModel {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
}

const INITIAL_STATE: Todo[] = [
    {
        description: 'Simple todo',
        done: false,
        id: uuid()
    }
];
export const TodoContext = createContext(INITIAL_STATE);

export const TodoContextProvider = (props: Readonly<any>) => {
    const [todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = (todo: Todo) => {
        const newTodo: Todo = { ...todo, id: uuid() };
        setTodos([...todos, newTodo]);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo } as any}>
            {props.children}
        </TodoContext.Provider>
    );
};
