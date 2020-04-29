import React, { useState } from 'react'
import { Text, SafeAreaView, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { addStyles as styles } from '../../Style'
import { connect } from 'react-redux'
import { addTodo, checkBox, updateMemo } from '../../../Actions/actions'
import Checkbox from '../AddItem/Checkbox/Checkbox'

const Update = (props) => {
    const ItemData = props.todoData ? props.todoData.filter(elem => elem.id === props.itemId) : null

    const [titleText, titleChange] = useState(ItemData[0].title)
    const [textText, textChange] = useState(ItemData[0].text)

    const updateMemo = () => {
        if (titleText && textText) {

            props.updateMemo(titleText, textText, props.itemId)
            props.goTo()
        }
    }

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
                    <TouchableOpacity
                        style={styles.btnContainer} >
                        <Text style={styles.btnText}
                            onPress={updateMemo} >Update memo</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMemo(title, text, id) {
            dispatch(updateMemo(title, text, id))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        todoData: state.todoList.todosData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Update)