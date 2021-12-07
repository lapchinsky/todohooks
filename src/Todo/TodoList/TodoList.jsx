import React from "react";
import PropTypes from 'prop-types'
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css'


const TodoList = function ({todos}) {
    return (
        <ul className="list-group todo-list">
            { todos.map((todo, idx) => <TodoItem todo={todo} key={todo.id} index={idx}/>) }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList