import React from 'react'
import Update from './Update'
import {Constans} from '../../App/constans/constans'

const UpdateNav = ({ navigation, route }) => {
    const goTo = () => {
        navigation.navigate(Constans.TODO_SCREEN)
    }

    return (
        <Update itemId={route.params.id} goTo={goTo} />
    )
}

export default UpdateNav