import React from 'react'
import { Text, View } from 'react-native'
import {headerStyles as styles} from '../../../Style'

const Header = () => {
    return(
        <View style={styles.container} >
            <Text style={styles.headTitle} >
                Remember me
            </Text>
        </View>
    )
}

export default Header