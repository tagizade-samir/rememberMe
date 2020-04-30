import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { addStyles as styles } from '../../../Style'

const TextInputFrom = (props) => {
    return (
        <View style={styles.formContainer} >
            <Text style={styles.textLabel} >Text</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Enter your text'
                multiline={true}
                numberOfLines={8}
                maxLength={300}
                value={props.textText}
                onChangeText={(text) => props.textChange(text)} />
        </View>
    )
}

export default TextInputFrom