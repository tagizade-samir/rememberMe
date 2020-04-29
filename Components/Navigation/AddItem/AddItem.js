import React, { useState } from 'react'
import { Text, SafeAreaView, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { addStyles as styles } from '../../Style'
import { connect } from 'react-redux'
import { addTodo, checkBox } from '../../../Actions/actions'
import Checkbox from './Checkbox/Checkbox'

const AddItem = (props) => {
    const [titleText, titleChange] = useState(null)
    const [textText, textChange] = useState(null)

    const addMemo = () => {
        if (titleText && textText) {
            const date = new Date()
            date.setHours(date.getHours() + 4)
            let box = props.checks.filter(elem => elem.checked)

            props.addTodo(titleText, textText, getTodoDate(date), box[0].value)
            props.goTo()
        }
    }

    const checkBox = (id) => {
        props.checkBox(id)
    }

    const checks = props.checks.map(
        elem =>
            <Checkbox
                key={elem.id}
                id={elem.id}
                value={elem.value}
                title={elem.title}
                checked={elem.checked}
                checkBox={checkBox} />
    )

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView >
                <View style={styles.form} >
                    <View style={styles.formContainer} >
                        <Text style={styles.titleLabel} >Title</Text>
                        <TextInput
                            style={styles.titleInput}
                            placeholder='Enter your title'
                            maxLength={35}
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
                    <View style={styles.checksContainer} >
                        {checks}
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
        addTodo(title, text, date, color) {
            dispatch(addTodo(title, text, date, color))
        },
        checkBox(id) {
            dispatch(checkBox(id))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        checks: state.addTodo.checkData
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

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)