import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { headerStyles as styles } from '../../../../Style'
import {Constans} from '../../../../App/constans/constans'

const FilterButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.btnContainer}
            onPress={props.toggleFilter} >
            <Text style={styles.btn} >{Constans.FILTER_BTN_NAME}</Text>
        </TouchableOpacity>
    )
}

export default FilterButton