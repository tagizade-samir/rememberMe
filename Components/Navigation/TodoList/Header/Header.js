import React from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import { headerStyles as styles } from '../../../Style'

const Header = (props) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity
                style={styles.btnContainer} >
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