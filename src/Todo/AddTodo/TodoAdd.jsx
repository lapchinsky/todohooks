import React, {useState, useContext} from "react";
import Context from "../../Context/Context";

const useInputValue = function (defaultValue= '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value

    }
}

const TodoAdd = function () {
    const { addTodo } = useContext(Context)
    const input = useInputValue('')

    const submitHandler = function(event) {
        event.preventDefault()

        if (input.value().trim()) {
            addTodo(input.value())
            input.clear()
        }
    }

    return (
        <form onSubmit={submitHandler} className='item-add-form d-flex'>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <input {...input.bind} type="text" className='form-control' placeholder='What needs to be done?'/>
            <button type='submit' className='btn btn-outline-secondary'>Add Item</button>
        </form>
    )
}

export default TodoAdd