import React, { useState } from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'
import { addStyles as styles } from '../../Style'
import { connect } from 'react-redux'
import { updateMemo } from '../../../Actions/actions'
import TitleINputForm from '../AddItem/TitleInputForm/TitleInputForm'
import TextInputFrom from '../AddItem/TextInputForm/TextInputForm'
import AddMemoButton from '../AddItem/AddMemoButton/AddMemoButton'
import {Constans} from '../../App/constans/constans'

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
                    <TitleINputForm
                        titleText={titleText}
                        titleChange={titleChange} />
                    <TextInputFrom 
                        textText={textText}
                        textChange={textChange} />
                    <AddMemoButton 
                        btnMethod={updateMemo}
                        btnName={Constans.UPDATE_MEMO_BTN_NAME} />
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