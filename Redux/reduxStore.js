import {createStore} from 'redux'
import {todoListReducer} from '../Reducers/todoListReducer'

export const store = createStore(todoListReducer)