import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Todo from '../todo/Todo';
import './Home.css';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const d = new Date();
        const date = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
        const todo = {
            text: input,
            date: date
        }
        setTodos([...todos, todo]);
        setInput('');
    }

    const todoCompleted = (isComplete, todo) => {
        const index = todos.indexOf(todo);
        const updatedTodo = {...todo, isComplete}
        const todosCopy = [...todos];
        todosCopy.splice(index,1,updatedTodo);
        console.log(todosCopy);


        setTodos(todosCopy);
    }
    const deleteTodosItem = (todo) => {
        const index = todos.indexOf(todo);
        const todosCopy = [...todos];
        todosCopy.splice(index,1);
        console.log(todosCopy);
        setTodos(todosCopy);
    }

    return (
        <div>
            <h1>TODO APP</h1>
            <div className="search__bar">
                <form>
                    <TextField 
                    className="todo__input"
                    id="standard-basic" 
                    label="Todo"
                    variant="standard"
                    value={input} 
                    onChange={(event) => setInput(event.target.value)} 
                    placeholder="Write your todo here..."
                    />  
                    <Button variant="contained" type="submit" onClick={handleSubmit}>Add</Button>
                </form>
            </div>

            <div className="todo__list">
                {
                    todos.map(todo => <Todo
                        todoCompleted={todoCompleted}
                        deleteTodosItem={deleteTodosItem}
                        todo={todo}
                        ></Todo>)
                }
                
            </div>
        </div>
    );
};

export default Home;