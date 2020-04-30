import React from 'react'
import { todoItem as styles } from '../../../../Style'
import { Text } from 'react-native'

const ItemTitleText = (props) => {
    return (
        <Text style={styles.title} >
            {props.title}
        </Text>
    )
}

export default ItemTitleText