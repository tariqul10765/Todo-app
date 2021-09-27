import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import './Todo.css';

const Todo = (props) => {
    const {text,date, isComplete} = props.todo;

    const todoCompletedStyle = {
        textDecoration: 'line-through'
    }
    return (
        <div>
            <div className="todo">
                <Card className="todo__card">
                    <CardContent className="todo__content">
                        <Typography className="main__content" style={isComplete?todoCompletedStyle: null} variant="h5" component="div">
                            {text}
                        </Typography>
                        <div className="date">
                            <p>Date: {date}</p>
                        </div>
                    </CardContent>
                    <CardActions className="todo__action">
                        <Button
                            onClick={() => {
                                props.todoCompleted(!isComplete, props.todo);
                            }}
                            size="small"
                            variant="outlined"
                        >Complete</Button>
                        <Button
                            onClick={() => props.deleteTodosItem(props.todo)}
                            size="small"
                            variant="outlined"
                            color="error"
                        >Close</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default Todo;