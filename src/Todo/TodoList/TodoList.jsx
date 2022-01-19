import React from "react";
import PropTypes from 'prop-types'
import {CSSTransition, TransitionGroup} from "react-transition-group";
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css'



const TodoList = function ({todos}) {
    return (
        <TransitionGroup component='ul' className="list-group todo-list">
                {todos.map((todo, idx) => <CSSTransition
                    classNames='si'
                    timeout={500}
                    key={todo.id}
                ><TodoItem todo={todo} index={idx}/></CSSTransition>)}
        </TransitionGroup>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList