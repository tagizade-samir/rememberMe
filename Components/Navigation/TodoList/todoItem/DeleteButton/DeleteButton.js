import React from 'react'
import { todoItem as styles } from '../../../../Style'
import { Text, TouchableOpacity, Alert } from 'react-native'
import {Constans} from '../../../../App/constans/constans'

const DeleteButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.deleteBtnContainer}
            onPress={() =>
                Alert.alert(
                    'Are you sure you want to delete this memo?',
                    null,
                    [
                        { text: 'Yes', onPress: () => props.deleteTodo(props.id) },
                        { text: 'No', onPress: () => { } }
                    ],
                    { cancelable: false }
                )} >
            <Text style={styles.deleteBtnText} >{Constans.ITEM_DELETE_BTN_TXT}</Text>
        </TouchableOpacity>
    )
}

export default DeleteButton