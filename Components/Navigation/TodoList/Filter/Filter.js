import React from 'react'
import {filterStyles as styles} from '../../../Style'
import { Text, View, TouchableOpacity } from 'react-native'

const Filter = (props) => {
    const filterData = [
        'none',
        'white',
        'red',
        'yellow',
        'green'
    ]

    const bgColor = 'steelblue'

    const filters = filterData.map(elem => 
        <TouchableOpacity
                style={[styles.rowContainer, {backgroundColor: props.filter == elem ? bgColor : 'lightgray'}]}
                key={elem}
                onPress={() => props.filterBtn(elem)} >
                <Text style={styles.row} >{elem}</Text>
            </TouchableOpacity>
    )

    return (
        <View style={styles.container} >
            {filters}
        </View>
    )
}

export default Filter