import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { todoListStyles as styles } from '../../../Style'
import {Constans} from '../../../App/constans/constans'

const AddButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.goTo}
            style={styles.btnContainer} >
            <Text style={styles.btnText} >{Constans.ADD_BTN_NAME}</Text>
        </TouchableOpacity>
    )
}

export default AddButton