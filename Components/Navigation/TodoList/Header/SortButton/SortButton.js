import React from 'react'
import { Text, TouchableOpacity, Alert } from 'react-native'
import { headerStyles as styles } from '../../../../Style'
import { Constans } from '../../../../App/constans/constans'

const SortButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => {
                Alert.alert(
                    'How you want to sort your memos?',
                    null,
                    [
                        { text: 'From low to high', onPress: () => props.sortByDate(false) },
                        { text: 'From high to low', onPress: () => props.sortByDate(true) },
                    ],
                    { cancelable: false }
                )
            }} >
            <Text style={styles.btn} >{Constans.SORT_BTN_NAME}</Text>
        </TouchableOpacity>
    )
}

export default SortButton