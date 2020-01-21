import React, { useContext, useState } from 'react';
import uuid from 'uuid/v1';
import { Todo, TodoContext } from '../../contexts/TodosContext';
import { Checkbox } from '../checkbox/Checkbox';

export const TodoForm = () => {
    const { addTodo } = useContext(TodoContext) as any;
    const [description, setDescription] = useState('');
    const [done, setDone] = useState(false);

    const addTodoClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();

        if (description.trim().length === 0) {
            return;
        }

        const todo: Todo = { description: description.trim(), done: done, id: uuid() };
        addTodo(todo);

        setDescription('');
        setDone(false);
    };

    const toggleDone = () => {
        setDone(!done);
    }

    return (
        <form className="form-horizontal">
            <hr />

            <h4>New Todo Form</h4>

            <div className="row">
                <div className="col-md-6">

                    <span><Checkbox selected={done} onClick={toggleDone} /> Done</span>

                    <input type="text" className="form-control" placeholder="Description" value={description}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                    />

                    <div className="text-right">
                        <button className="btn btn-success" onClick={addTodoClick} disabled={description.trim().length === 0}>
                            Add todo
                        </button>
                    </div>

                </div>
            </div>
        </form>
    );
};
