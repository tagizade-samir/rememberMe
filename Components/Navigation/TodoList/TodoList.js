import React from 'react'
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native'
import Header from './Header/Header'
import { todoListStyles as styles } from '../../Style'
import { connect } from 'react-redux'
import TodoItem from './todoItem/TodoItem'
import {deleteTodo, filterBy, toggleFilter} from '../../../Actions/actions'
import Filter from './Filter/Filter'

const TodoList = (props) => {
    const deleteTodo = (id) => {
        props.deleteTodo(id)
    }

    const filterBtn = (color) => {
        props.filterBy(color)
    }

    let Items = []

    if (props.filter === 'none') {
        Items = props.data.map(
            item =>
                <TodoItem
                    key={item.id}
                    title={item.title}
                    text={item.text}
                    bgColor={item.bgColor}
                    date={item.date}
                    deleteTodo={deleteTodo}
                    id={item.id} />
        )
    } else {
        
    }

    

    const toggleFilter = () => {
        props.toggleFilter()
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header
                toggleFilter={toggleFilter} />
            {props.showFilter && <Filter filter={props.filter} filterBtn={filterBtn} />}
            <ScrollView style={styles.scrollContainer} >
                {Items}
            </ScrollView>
            <TouchableOpacity
                onPress={props.goTo}
                style={styles.btnContainer} >
                <Text style={styles.btnText} >+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.todoList.todosData,
        filter: state.todoList.filter,
        showFilter: state.todoList.showFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo(id) {
            dispatch(deleteTodo(id))
        },
        filterBy(color) {
            dispatch(filterBy(color))
        },
        toggleFilter() {
            dispatch(toggleFilter())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)