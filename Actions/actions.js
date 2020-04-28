const ADD_TODO = 'ADD_TODO'

export const addTodo = (title, text, date) => {
    return {
        type: ADD_TODO,
        title,
        text,
        date
    }
}