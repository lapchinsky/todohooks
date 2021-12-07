import React, {useContext} from "react";
import PropTypes from 'prop-types'
import {formatDistanceToNow} from "date-fns";
import Context from "../../Context/Context";

import './TodoItem.css'
import Timer from "../Timer/Timer";


const TodoItem = function ({todo}) {

    const {removeTodo, toggleTodo, importantTodo} = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }
    if (todo.important) {
        classes.push('important')
    }

    return (
        <li className="list-group-item">
            <span className={classes.join(' ')}>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <span className="todo-list-item-label" onClick={() => toggleTodo(todo.id)}>
                    {todo.title}
                </span>

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button className="btn btn-outline-danger btn-sm float-right" onClick={() => removeTodo(todo.id)}
                        type="button"><i className="fa fa-trash-o"/></button>
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button className="btn btn-outline-success btn-sm float-right" onClick={() => importantTodo(todo.id)}
                        type="button"><i className="fa fa-exclamation"/></button>
        </span>
            <div style={{color: 'dimgray', fontSize: '12px'}}>Created {formatDistanceToNow(
                todo.date,
                {includeSeconds: true}
            )} ago</div>
            <Timer />
        </li>
    )
}


TodoItem.propTypes = {
    todo: PropTypes.objectOf(PropTypes.any).isRequired
}

export default TodoItem