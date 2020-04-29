import React from 'react'
import TodoList from './TodoList'

const TodoListNav = ({navigation}) => {
    const goToAdd = () => {
        navigation.navigate('Add')
    }

    const goToUpdate = (id) => {
        navigation.navigate('Update', {id: id})
    }

    return(
        <TodoList goTo={goToAdd} goToUpdate={goToUpdate} />
    )
}

export default TodoListNav