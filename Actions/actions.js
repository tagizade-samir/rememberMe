import { Constans } from '../Components/App/constans/constans'
import { PURGE } from 'redux-persist'

export const purgeStore = () => {
    return {
        type: PURGE,
        key: 'root',
        result: () => null
    }
}

export const addTodo = (title, text, date, color) => {
    return {
        type: Constans.ADD_TODO,
        title,
        text,
        date,
        color
    }
}

export const deleteTodo = (id) => {
    return {
        type: Constans.DELETE_TODO,
        id
    }
}

export const filterBy = (color = 'none') => {
    return {
        type: Constans.FILTER_BY,
        color
    }
}

export const toggleFilter = () => {
    return {
        type: Constans.TOGGLE_FILTER
    }
}

export const checkBox = (id) => {
    return {
        type: Constans.CHECK_BOX,
        id
    }
}

export const sortByDate = (sort) => {
    return {
        type: Constans.SORT_BY_DATE,
        sort
    }
}

export const updateMemo = (title, text, id) => {
    return {
        type: Constans.UPDATE_MEMO,
        title,
        text,
        id
    }
}