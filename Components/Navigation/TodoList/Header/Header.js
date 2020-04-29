import React from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import { headerStyles as styles } from '../../../Style'

const Header = (props) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => {
                    Alert.alert(
                        'How you want to sort your memos?',
                        null,
                        [
                            {text: 'From low to high', onPress: () => props.sortByDate(false)},
                            {text: 'From high to low', onPress: () => props.sortByDate(true)},
                        ],
                        {cancelable: false}
                    )
                }} >
                <Text style={styles.btn} >Sort</Text>
            </TouchableOpacity>
            <Text style={styles.headTitle} >
                Remember me
            </Text>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={props.toggleFilter} >
                <Text style={styles.btn} >Filter</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header