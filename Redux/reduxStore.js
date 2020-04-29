import {createStore, combineReducers} from 'redux'
import {todoListReducer} from '../Reducers/todoListReducer'
import {addTodoReducer} from '../Reducers/addTodoReducer'
import {persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const rootReducer = combineReducers({
    todoList: todoListReducer,
    addTodo: addTodoReducer
})

const perConfig = {
    key: 'root',
    storage: AsyncStorage
}

const perReducer = persistReducer(perConfig, rootReducer)

export const store = createStore(perReducer)
export const persistor = persistStore(store)