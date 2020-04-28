import React, { useState } from 'react'
import { Text, SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native'
import { addStyles as styles } from '../../Style'
import { connect } from 'react-redux'
import { addTodo } from '../../../Actions/actions'
import { ScrollView } from 'react-native-gesture-handler'

const AddItem = (props) => {
    const [titleText, titleChange] = useState(null)
    const [textText, textChange] = useState(null)

    const addMemo = () => {
        const date = new Date()
        date.setHours(date.getHours() + 4)

        if (titleText && textText) {
            props.addTodo(titleText, textText, getTodoDate(date))
            props.goTo()
        }
    }

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView>
                <View style={styles.form} >
                    <View style={styles.formContainer} >
                        <Text style={styles.titleLabel} >Title</Text>
                        <TextInput
                            style={styles.titleInput}
                            placeholder='Enter your title'
                            maxLength={45}
                            value={titleText}
                            onChangeText={(text) => titleChange(text)} />
                    </View>
                    <View style={styles.formContainer} >
                        <Text style={styles.textLabel} >Text</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Enter your text'
                            multiline={true}
                            numberOfLines={8}
                            maxLength={300}
                            value={textText}
                            onChangeText={(text) => textChange(text)} />
                    </View>
                    <TouchableOpacity
                        style={styles.btnContainer} >
                        <Text style={styles.btnText}
                            onPress={addMemo} >Add memo</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo(title, text, date) {
            dispatch(addTodo(title, text, date))
        }
    }
}

const getTodoDate = (date) => {
    let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    let day = date.getDate() < 10 ? `0${date.detDate()}` : date.getDate()
    let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    let year = date.getFullYear()
    return `${hours}:${minutes}  ${day}.${month}.${year}`
}

export default connect(null, mapDispatchToProps)(AddItem)