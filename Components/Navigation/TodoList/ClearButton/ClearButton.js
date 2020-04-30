import React from 'react'
import { Text, TouchableOpacity, Alert } from 'react-native'
import { todoListStyles as styles } from '../../../Style'
import {Constans} from '../../../App/constans/constans'

const ClearButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.clearBtnContainer}
            onPress={() => {
                Alert.alert(
                    'Are you sure you wan to clear all your memos?',
                    null,
                    [
                        { text: 'Yes, i\'m sure', onPress: () => props.purgeStore() },
                        { text: 'No, keep them', onPress: () => { } },
                    ],
                    { cancelable: false }
                )
            }} >
            <Text style={styles.clearBtnText} >{Constans.CLEAR_BTN_NAME}</Text>
        </TouchableOpacity>
    )
}

export default ClearButton