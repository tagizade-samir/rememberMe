import React from 'react'
import TodoList from './TodoList'
import { Constans } from '../../App/constans/constans'

const TodoListNav = ({ navigation }) => {
    const goToAdd = () => {
        navigation.navigate(Constans.ADD_SCREEN)
    }

    const goToUpdate = (id) => {
        navigation.navigate(Constans.UPDATE_SCREEN, { id: id })
    }

    return (
        <TodoList goTo={goToAdd} goToUpdate={goToUpdate} />
    )
}

export default TodoListNav