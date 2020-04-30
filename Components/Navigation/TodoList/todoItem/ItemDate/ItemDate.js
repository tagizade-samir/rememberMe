import React from 'react'
import { todoItem as styles } from '../../../../Style'
import { Text, View } from 'react-native'

const ItemDate = (props) => {
    return (
        <View>
            <Text style={styles.date} >
                {props.date}
            </Text>
        </View>
    )
}

export default ItemDate