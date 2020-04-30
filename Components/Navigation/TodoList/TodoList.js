import React from 'react'
import { Text, SafeAreaView, ScrollView } from 'react-native'
import Header from './Header/Header'
import { todoListStyles as styles } from '../../Style'
import { connect } from 'react-redux'
import TodoItem from './todoItem/TodoItem'
import { deleteTodo, filterBy, toggleFilter, sortByDate, purgeStore } from '../../../Actions/actions'
import Filter from './Filter/Filter'
import AddButton from './AddButton/AddButton'
import ClearButton from './ClearButton/ClearButton'
import {persistor} from '../../../Redux/reduxStore'

const TodoList = (props) => {
    const deleteTodo = (id) => {
        if (props.data.length === 1) {
            props.sortByDate(false)
        }
        props.deleteTodo(id)
    }

    const filterBtn = (color) => {
        props.filterBy(color)
    }

    let Items = []
//BUDET VREMYA, SDELAY CHTO TO S ETIMI IF ELSE, SDELAY KOD POMENWE I 4ITABELNEY. OK? Ponyal, spasibo)sdelayu) udachi)Spasibo)
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

            props.sorted ? Items.reverse() : Items
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
                        id={item.id}
                        goToUpdate={props.goToUpdate} />
            )

            props.sorted ? Items.reverse() : Items
        }
    }

    const purgeStore = () => {
        persistor.purge()
        props.sortByDate(false)
        props.purge()
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header
                toggleFilter={props.toggleFilter}
                sortByDate={props.sortByDate} />
            {props.showFilter && <Filter filter={props.filter} filterBtn={filterBtn} />}
            <ScrollView style={styles.scrollContainer} >
               <ClearButton purgeStore={purgeStore} />
                {Items}
            </ScrollView>
            <AddButton goTo={props.goTo} />
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
        },
        purge() {
            dispatch(purgeStore())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)