import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onClick({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}> 
        {props.edit ? (
            <>
            <input type="text" placeholder="Add a todo" value={input} 
                className="todo-input edit"
                ref={inputRef}
                onChange={handleChange}
            />
            <button className="add-todo-btn edit" onClick={handleSubmit}>Update</button>
            </>
        ) : 
        (<>
            <input type="text" placeholder="Add a todo" value={input} className="todo-input"
                ref={inputRef}
                onChange={handleChange}
            />
            <button className="add-todo-btn" onClick={handleSubmit}>Add todo</button>
            </>
        )
        }
            
        </form>
    )
}

export default TodoForm
