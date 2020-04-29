import React from 'react'
import {filterStyles as styles} from '../../../Style'
import { Text, View, TouchableOpacity } from 'react-native'

const Filter = (props) => {
    const filterData = [
        {name: 'none', value: 'none'},
        {name: 'white', value: 'white'},
        {name: 'red', value: 'tomato'},
        {name: 'yellow', value: 'goldenrod'},
        {name: 'green', value: 'darkgreen'}
    ]

    const bgColor = 'steelblue'

    const filters = filterData.map(elem => 
        <TouchableOpacity
                style={[styles.rowContainer, {backgroundColor: props.filter == elem.value ? bgColor : 'lightgray'}]}
                key={elem.name}
                onPress={() => props.filterBtn(elem.value)} >
                <Text style={styles.row} >{elem.name}</Text>
            </TouchableOpacity>
    )

    return (
        <View style={styles.container} >
            {filters}
        </View>
    )
}

export default Filter