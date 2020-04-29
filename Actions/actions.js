const ADD_TODO = 'ADD_TODO',
    CHECK_BOX = 'CHECK_BOX',
    DELETE_TODO = 'DELETE_TODO',
    FILTER_BY = 'FILTER_BY',
    TOGGLE_FILTER = 'TOGGLE_FILTER'

export const addTodo = (title, text, date, color) => {
    return {
        type: ADD_TODO,
        title,
        text,
        date,
        color
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const filterBy = (color = 'none') => {
    return {
        type: FILTER_BY,
        color
    }
}

export const toggleFilter = () => {
    return {
        type: TOGGLE_FILTER
    }
}

export const checkBox = (id) => {
    return {
        type: CHECK_BOX,
        id
    }
}