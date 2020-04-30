import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { addStyles as styles } from '../../../Style'

const AddMemoButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.btnContainer} >
            <Text style={styles.btnText}
                onPress={props.btnMethod} >{props.btnName}</Text>
        </TouchableOpacity>
    )
}

export default AddMemoButton