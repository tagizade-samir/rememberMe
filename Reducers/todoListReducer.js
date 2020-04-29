const ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    FILTER_BY = 'FILTER_BY',
    TOGGLE_FILTER = 'TOGGLE_FILTER'

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
            bgColor: 'white',
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
    showFilter: false
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
        default:
            return state
    }
}