import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { addDataToLocalStorage, deleteDataFromLocalStorage, getDataToLocalStorage, updateDataToLocalStorage } from '../../utilities/LocalStorage';
import Todo from '../todo/Todo';
import './Home.css';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const getData = getDataToLocalStorage('todos');
        if(getData) setTodos(getData);

    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const d = new Date();
        const date = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
        const todo = {
            text: input,
            date: date
        }
        const index = todos.findIndex(d => d.text === input);
        console.log(index);

        if(input.length > 0 && index<0){
            // add todo to localstorage
            addDataToLocalStorage(todo);


            setTodos([...todos, todo]);
        }
        
        setInput('');
    }

    const todoCompleted = (isComplete, todo) => {
        const index = todos.indexOf(todo);
        const updatedTodo = {...todo, isComplete}
        const todosCopy = [...todos];
        todosCopy.splice(index,1,updatedTodo);


        setTodos(todosCopy);

        // update to localStorage
        updateDataToLocalStorage(updatedTodo);
    }
    const deleteTodosItem = (todo) => {
        // delete from localStorage
        deleteDataFromLocalStorage(todo);


        const index = todos.indexOf(todo);
        const todosCopy = [...todos];
        todosCopy.splice(index,1);
        setTodos(todosCopy);

    }

    return (
        <div>
            <h1 className="site__name">TODO APP</h1>
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
                    <Button variant="contained" type="submit" onClick={handleSubmit}>Add To Todo</Button>
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