import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { addStyles as styles } from '../../../Style'

const TitleINputForm = (props) => {
    return (
        <View style={styles.formContainer} >
            <Text style={styles.titleLabel} >Title</Text>
            <TextInput
                style={styles.titleInput}
                placeholder='Enter your title'
                maxLength={35}
                value={props.titleText}
                onChangeText={(text) => props.titleChange(text)} />
        </View>
    )
}

export default TitleINputForm