import React, {useContext} from "react";
import './SideButtons.css'
import Context from "../../Context/Context";

const SideButtons = function () {
    const {todosCount, clearCompleted} = useContext(Context)
    return(
        <div className='item-side-buttons d-flex'>
            <h2 className='uncompleted'>Uncompleted: {todosCount()}</h2>
            <button
                type="button"
                className='btn btn-info'
                onClick={() => clearCompleted()}>
                Clear Completed</button>
        </div>
    )
}

export default SideButtons