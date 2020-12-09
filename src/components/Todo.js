import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
             value: ''
        });
    }

    if(edit.id){
        return <TodoForm edit={edit} onClick={submitUpdate}/>
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={todo.id}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <TiEdit className="edit-icon" onClick={() => setEdit({id: todo.id, value: todo.text})}/>
                <RiCloseCircleLine className="delete-icon" onClick={() => removeTodo(todo.id)}/>
            </div>
        </div>
    ));
}

export default Todo
