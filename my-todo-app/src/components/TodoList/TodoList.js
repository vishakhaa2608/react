import React from 'react';

import classes from "./TodoList.css";
import TodoItem from "../TodoList/TodoItem/TodoItem";

const TodoList = (props) => {

    const transformedItems = Object.keys(props.items).map(
        iKeys => {
            return Array
        }
    );

    return (
        <div className = {classes.Burger}>
            <TodoItem category = "movies"/>
            <TodoItem category = "home"/>
            <TodoItem category = "work"/>
            <TodoItem category = "finance"/>
            <TodoItem category = "personal"/>
            <TodoItem category = "health"/>
        </div>
    );
};

export default TodoList;