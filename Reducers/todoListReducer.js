import { Constans } from '../Components/App/constans/constans'
import { PURGE } from 'redux-persist'

let initialState = {
    todosData: [],
    filter: 'none',
    showFilter: false,
    sorted: false
}

export const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constans.ADD_TODO:
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
        case Constans.DELETE_TODO:
            return {
                ...state,
                todosData: state.todosData.filter(elem => elem.id !== action.id)
            }
        case Constans.FILTER_BY:
            return {
                ...state,
                filter: action.color
            }
        case Constans.TOGGLE_FILTER:
            return {
                ...state,
                showFilter: state.showFilter ? false : true
            }
        case Constans.SORT_BY_DATE:
            return {
                ...state,
                sorted: action.sort
            }
        case Constans.UPDATE_MEMO:
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