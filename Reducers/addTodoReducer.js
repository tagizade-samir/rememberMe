import { Constans } from "../Components/App/constans/constans"

let initialState = {
    checkData: [
        { id: 1, value: 'white', checked: true, title: 'White' },
        { id: 2, value: 'tomato', checked: false, title: 'Red' },
        { id: 3, value: 'goldenrod', checked: false, title: 'Yellow' },
        { id: 4, value: 'darkgreen', checked: false, title: 'Green' },
    ]
}

export const addTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constans.CHECK_BOX:
            return {
                ...state,
                checkData: state.checkData.map(elem => {
                    if (elem.id === action.id) {
                        return { ...elem, checked: true }
                    }

                    return { ...elem, checked: false }
                })
            }
        default:
            return state
    }
}