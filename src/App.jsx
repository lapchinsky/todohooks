import React, {useEffect} from 'react'
import TodoList from "./Todo/TodoList/TodoList";
import Context from "./Context/Context";
import TodoAdd from "./Todo/AddTodo/TodoAdd";
import Header from "./Todo/AppHeader/Header";
import SearchPanel from "./Todo/SearchPanel/SearchPanel";
import ItemStatusFilter from "./Todo/ItemStatusFilter/ItemStatusFilter";
import SideButtons from "./Todo/SIdeButtons/SideButtons";
import './App.css'

const App = function () {

    const [buttons, setButtons] = React.useState([
        {label: 'All', active: true, id: 1,},
        {label: 'Active', active: false, id: 2,},
        {label: 'Done', active: false, id: 3,},
    ])

    const [ids, setIds] = React.useState(1)

    const inactiveButton = function () {
        setButtons(
            // eslint-disable-next-line no-return-assign,no-param-reassign
            buttons.map(button => button.active = false)
        )
    }

    const toggleButton = async function (id) {
        await inactiveButton()
        setButtons(
            buttons.map(button => {
                if (button.id === id) {
                    // eslint-disable-next-line no-param-reassign
                    button.active = 'true'
                }
                return button
            })
        )
    }

    const [todos, setTodos] = React.useState([])

    const filterTodos = function (id) {
        let data
        if (id === 1) {
            data = todos
        } else if (id === 2) {
            data = todos.filter(todo => !todo.completed)
        } else {
            data = todos.filter(todo => todo.completed)
        }
        return data
    }

    const todosCount = function () {
        return todos.filter(todo => !todo.completed).length
    }

    const doneCount = function () {
        return todos.filter(todo => todo.completed).length
    }

    const toggleTodo = function (id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    // eslint-disable-next-line no-param-reassign
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    const importantTodo = function (id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    // eslint-disable-next-line no-param-reassign
                    todo.important = !todo.important
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function clearCompleted() {
        setTodos(todos.filter(todo => !todo.completed))
    }

    const addTodo = function (title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false,
            date: Date.now()
        }]))
    }

    useEffect(() => {
        // eslint-disable-next-line no-undef
        const raw = localStorage.getItem('todos') || []
        setTodos(JSON.parse(raw))
    }, [])

    useEffect(() => {
        // eslint-disable-next-line no-undef
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <Context.Provider value={{ removeTodo, toggleTodo,
                                importantTodo, addTodo,
                                todosCount, doneCount,
                                clearCompleted, buttons,
                                toggleButton, setIds}}>
            <div className='todo-app'>
                <Header />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                {todos.length ? <TodoList todos={filterTodos(ids)} /> : <p style={{display: 'flex' ,justifyContent: 'center',color: 'dimgray', fontWeight: 'bold'}}>No todos</p>}
                <SideButtons />
                <TodoAdd />
            </div>
        </Context.Provider>

    )
}

export default App