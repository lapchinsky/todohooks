import React, {useContext} from 'react'
import './Header.css'
import Context from "../../Context/Context";

const Header = function () {
    const {doneCount, todosCount} = useContext(Context)

    return (
        <div className="app-header d-flex">
            <h1>Todo List</h1>
            <h2>{todosCount()} more to do, {doneCount()} done</h2>
        </div>
    )
}

export default Header