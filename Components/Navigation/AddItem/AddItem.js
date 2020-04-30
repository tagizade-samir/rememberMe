import React, { useState } from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'
import { addStyles as styles } from '../../Style'
import { connect } from 'react-redux'
import { addTodo, checkBox } from '../../../Actions/actions'
import Checkbox from './Checkbox/Checkbox'
import TitleINputForm from './TitleInputForm/TitleInputForm'
import TextInputFrom from './TextInputForm/TextInputForm'
import AddMemoButton from './AddMemoButton/AddMemoButton'
import Functions from '../../../Functions/Functions'
import { Constans } from '../../App/constans/constans'

const AddItem = (props) => {
    const [titleText, titleChange] = useState(null)
    const [textText, textChange] = useState(null)

    const addMemo = () => {
        if (titleText && textText) {
            const date = new Date()
            let box = props.checks.filter(elem => elem.checked)

            props.checkBox(1)
            props.addTodo(titleText, textText, Functions.getTodoDate(date), box[0].value)
            props.goTo()
        }
    }

    const checkBox = (id) => {
        props.checkBox(id)
    }

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView >
                <View style={styles.form} >
                    <TitleINputForm
                        titleChange={titleChange}
                        titleText={titleText} />
                    <TextInputFrom
                        textChange={textChange}
                        textText={textText} />
                    <View style={styles.checksContainer} >
                        {props.checks.map(elem =>
                            <Checkbox
                                key={elem.id}
                                id={elem.id}
                                value={elem.value}
                                title={elem.title}
                                checked={elem.checked}
                                checkBox={checkBox} />)}
                    </View>
                    <AddMemoButton
                        btnMethod={addMemo}
                        btnName={Constans.ADD_MEMO_BTN_NAME} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)