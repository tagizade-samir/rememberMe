import React from 'react'
import { Text } from 'react-native'
import { headerStyles as styles } from '../../../../Style'
import { Constans } from '../../../../App/constans/constans'

const AppTitle = () => {
    return (
        <Text style={styles.headTitle} >
            {Constans.APP_NAME}
        </Text>
    )
}

export default AppTitle