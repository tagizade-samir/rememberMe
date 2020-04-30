import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TodoListNav from './TodoList/TodoListNav'
import AddItemNav from './AddItem/AddItemNav'
import UpdateNav from './Update/UpdateNav'
import { Constans } from '../App/constans/constans'

const RootMainStack = createStackNavigator()

const MainStackNav = () => {
    return (
        <RootMainStack.Navigator>
            <RootMainStack.Screen
                name={Constans.TODO_SCREEN}
                component={TodoListNav}
                options={{
                    headerShown: false
                }} />
            <RootMainStack.Screen
                name={Constans.ADD_SCREEN}
                component={AddItemNav}
                options={{
                    headerTitle: Constans.ADD_SCREEN_TITLE
                }} />
            <RootMainStack.Screen
                name={Constans.UPDATE_SCREEN}
                component={UpdateNav}
                options={{
                    headerTitle: Constans.UPDATE_SCREEN_TITLE
                }} />
        </RootMainStack.Navigator>
    )
}

export default MainStackNav