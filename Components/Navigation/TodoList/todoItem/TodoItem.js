import React from 'react'
import {todoItem as styles} from '../../../Style'
import { Text, View } from 'react-native'

const TodoItem = (props) => {
    return(
        <View style={[styles.container, {backgroundColor: props.bgColor}]} >
            <View style={styles.titleContainer} >
                <Text style={styles.title} >
                    {props.title}
                </Text>
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