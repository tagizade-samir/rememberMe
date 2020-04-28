import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TodoListNav from './TodoList/TodoListNav'
import AddItemNav from './AddItem/AddItemNav'

const RootMainStack = createStackNavigator()

const MainStackNav = () => {
    return(
        <RootMainStack.Navigator>
            <RootMainStack.Screen
                name='ToDo'
                component={TodoListNav}
                options={{
                    headerShown: false
                }} />
            <RootMainStack.Screen
                name='Add'
                component={AddItemNav}
                options={{
                    headerTitle: 'Add memo'
                }} />
        </RootMainStack.Navigator>
    )
}

export default MainStackNav