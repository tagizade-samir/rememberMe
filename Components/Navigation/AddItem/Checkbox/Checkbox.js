import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { checkboxStyles as styles } from '../../../Style'

const Checkbox = (props) => {
    const bgColor = props.checked ? 'steelblue' : 'white'

    return (
        <View style={styles.container} >
            <TouchableOpacity
                style={[styles.box, {backgroundColor: bgColor}]}
                onPress={() => props.checkBox(props.id)} />
            <Text style={styles.text} >{props.title}</Text>
        </View>
    )
}

export default Checkbox