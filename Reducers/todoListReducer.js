const ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    FILTER_BY = 'FILTER_BY',
    TOGGLE_FILTER = 'TOGGLE_FILTER',
    SORT_BY_DATE = 'SORT_BY_DATE',
    UPDATE_MEMO = 'UPDATE_MEMO'

let initialState = {
    todosData: [
        {
            id: 1,
            title: 'Some title',
            text: 'Some text',
            bgColor: 'darkgreen',
            date: '26.04.2020'
        },
        {
            id: 2,
            title: 'Some title 2',
            text: 'Some text 2',
            bgColor: 'goldenrod',
            date: '27.04.2020'
        },
        {
            id: 3,
            title: 'Some title 3',
            text: 'Some text 3',
            bgColor: 'goldenrod',
            date: '28.04.2020'
        },
    ],
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
        default:
            return state
    }
}