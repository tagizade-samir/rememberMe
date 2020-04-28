import React from 'react'
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native'
import Header from './Header/Header'
import { todoListStyles as styles } from '../../Style'
import { connect } from 'react-redux'
import TodoItem from './todoItem/TodoItem'

const TodoList = (props) => {
    const Items = props.data.map(
        item =>
            <TodoItem
                key={item.id}
                title={item.title}
                text={item.text}
                bgColor={item.bgColor}
                date={item.date} />
    )

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header />
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
        data: state.todosData
    }
}

export default connect(mapStateToProps, null)(TodoList)