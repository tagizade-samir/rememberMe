import { PURGE } from 'redux-persist'

const ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    FILTER_BY = 'FILTER_BY',
    TOGGLE_FILTER = 'TOGGLE_FILTER',
    SORT_BY_DATE = 'SORT_BY_DATE',
    UPDATE_MEMO = 'UPDATE_MEMO'


let initialState = {
    todosData: [],
    filter: 'none',
    showFilter: false,
    sorted: false
}

export const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let newMemo = {
                id: state.todosData.length + 1,
                title: action.title,
                text: action.text,
                bgColor: action.color,
                date: action.date
            }

            return {
                ...state,
                todosData: [...state.todosData, newMemo]
            }
        case DELETE_TODO:
            return {
                ...state,
                todosData: state.todosData.filter(elem => elem.id !== action.id)
            }
        case FILTER_BY:
            return {
                ...state,
                filter: action.color
            }
        case TOGGLE_FILTER:
            return {
                ...state,
                showFilter: state.showFilter ? false : true
            }
        case SORT_BY_DATE:
            return {
                ...state,
                sorted: action.sort
            }
        case UPDATE_MEMO:
            return {
                ...state,
                todosData: state.todosData.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            title: action.title,
                            text: action.text
                        }
                    }

                    return item
                })
            }
        case PURGE:
            return {
                ...state,
                todosData: []
            }
        default:
            return state
    }
}