import React from 'react'
import TodoList from './TodoList'

const TodoListNav = ({navigation}) => {
    const goToAdd = () => {
        navigation.navigate('Add')
    }

    return(
        <TodoList goTo={goToAdd} />
    )
}

export default TodoListNav