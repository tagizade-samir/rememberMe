const ADD_TODO = 'ADD_TODO'

let initialState = {
    todosData: [
        {
            id: 1,
            title: 'Some title',
            text: 'Some text',
            bgColor: 'gold',
            date: '26.04.2020'
        },
        {
            id: 2,
            title: 'Some title 2',
            text: 'Some text 2',
            bgColor: 'coral',
            date: '27.04.2020'
        },
        {
            id: 3,
            title: 'Some title 3',
            text: 'Some text 3',
            bgColor: 'darkgreen',
            date: '28.04.2020'
        },
    ]
}
export const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let newMemo = {
                id: state.todosData.length + 1,
                title: action.title,
                text: action.text,
                bgColor: 'red',
                date: action.date
            }

            console.log(newMemo)

            return {
                ...state,
                todosData: [...state.todosData, newMemo]
            }
        default:
            return state
    }
}