import React from 'react'
import {todoItem as styles} from '../../../Style'
import { Text, View, TouchableOpacity, Alert } from 'react-native'

const TodoItem = (props) => {
    return(
        <View style={[styles.container, {backgroundColor: props.bgColor}]} >
            <View style={styles.titleContainer} >
                <Text style={styles.title} >
                    {props.title}
                </Text>
                <View style={styles.btnContainer} >
                <TouchableOpacity
                    style={styles.deleteBtnContainer}
                    onPress={() => props.goToUpdate(props.id)} >
                    <Text style={styles.deleteBtnText} >Update</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.deleteBtnContainer}
                    onPress={() =>
                         Alert.alert(
                             'Are you sure you want to delete this memo?',
                             null,
                             [
                                 {text: 'Yes', onPress: () => props.deleteTodo(props.id)},
                                 {text: 'No', onPress: () => {}}
                                ],
                             {cancelable: false}
                             )} >
                    <Text style={styles.deleteBtnText} >Delete</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.textContainer} >
                <Text style={styles.text} >
                    {props.text}
                </Text>
            </View>
            <View>
                <Text style={styles.date} >
                    {props.date}
                </Text>
            </View>
        </View>
    )
}

export default TodoItem