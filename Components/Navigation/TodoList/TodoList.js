import React from 'react'
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native'
import Header from './Header/Header'
import { todoListStyles as styles } from '../../Style'
import { connect } from 'react-redux'
import TodoItem from './todoItem/TodoItem'
import { deleteTodo, filterBy, toggleFilter, sortByDate } from '../../../Actions/actions'
import Filter from './Filter/Filter'

const TodoList = (props) => {
    const deleteTodo = (id) => {
        props.deleteTodo(id)
    }

    const filterBtn = (color) => {
        props.filterBy(color)
    }

    let Items = []

    if (props.data == '') {
        Items =
            <Text style={styles.defaultText} >
                Add your first memo using button below
            </Text>
    } else {
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
                        id={item.id}
                        goToUpdate={props.goToUpdate} />
            )
        } else {
            Items = props.data.filter(elem => elem.bgColor === props.filter).map(
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
        }
    }

    const toggleFilter = () => {
        props.toggleFilter()
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header
                toggleFilter={toggleFilter}
                sortByDate={props.sortByDate} />
            {props.showFilter && <Filter filter={props.filter} filterBtn={filterBtn} />}
            <ScrollView style={styles.scrollContainer} >
                {props.sorted ? Items.reverse() : Items}
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
        showFilter: state.todoList.showFilter,
        sorted: state.todoList.sorted
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
        },
        sortByDate(sort) {
            dispatch(sortByDate(sort))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)