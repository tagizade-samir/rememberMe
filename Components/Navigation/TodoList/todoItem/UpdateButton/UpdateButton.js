import React from 'react'
import { todoItem as styles } from '../../../../Style'
import { Text, TouchableOpacity } from 'react-native'
import {Constans} from '../../../../App/constans/constans'

const UpdateButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.deleteBtnContainer}
            onPress={() => props.goToUpdate(props.id)} >
            <Text style={styles.deleteBtnText} >{Constans.ITEM_UPDATE_BTN_TXT}</Text>
        </TouchableOpacity>
    )
}

export default UpdateButton