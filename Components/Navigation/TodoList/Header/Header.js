import React from 'react'
import { View } from 'react-native'
import { headerStyles as styles } from '../../../Style'
import SortButton from './SortButton/SortButton'
import FilterButton from './FilterButton/FilterButton'
import AppTitle from './AppTitle/AppTitle'


const Header = (props) => {
    return (
        <View style={styles.container} >
            <SortButton sortByDate={props.sortByDate} />
            <AppTitle />
            <FilterButton toggleFilter={props.toggleFilter} />
        </View>
    )
}

export default Header