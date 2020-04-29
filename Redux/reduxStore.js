import {createStore, combineReducers} from 'redux'
import {todoListReducer} from '../Reducers/todoListReducer'
import {addTodoReducer} from '../Reducers/addTodoReducer'

const rootReducer = combineReducers({
    todoList: todoListReducer,
    addTodo: addTodoReducer
})

export const store = createStore(rootReducer)