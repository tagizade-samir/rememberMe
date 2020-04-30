import React from 'react'
import { todoItem as styles } from '../../../Style'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import ItemTitleText from './TitleText/TitleText'
import DeleteButton from './DeleteButton/DeleteButton'
import UpdateButton from './UpdateButton/UpdateButton'
import ItemText from './ItemText/ItemText'
import ItemDate from './ItemDate/ItemDate'

const TodoItem = (props) => {
    return (
        <View style={[styles.container, { backgroundColor: props.bgColor }]} >
            <View style={styles.titleContainer} >
                <ItemTitleText title={props.title} />
                <View style={styles.btnContainer} >
                    <UpdateButton
                        goToUpdate={props.goToUpdate}
                        id={props.id} />
                    <DeleteButton
                        deleteTodo={props.deleteTodo}
                        id={props.id} />
                </View>
            </View>
            <ItemText text={props.text} />
            <ItemDate date={props.date} />
        </View>
    )
}

export default TodoItem