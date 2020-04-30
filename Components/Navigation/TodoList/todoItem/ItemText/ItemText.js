import React from 'react'
import { todoItem as styles } from '../../../../Style'
import { Text, View } from 'react-native'

const ItemText = (props) => {
    return (
        <View style={styles.textContainer} >
            <Text style={styles.text} >
                {props.text}
            </Text>
        </View>
    )
}

export default ItemText