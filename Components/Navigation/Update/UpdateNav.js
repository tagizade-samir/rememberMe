import React, { useState } from 'react'
import Update from './Update'

const UpdateNav = ({navigation, route}) => {
    const goTo = () => {
        navigation.navigate('ToDo')
    }

    return (
        <Update itemId={route.params.id} goTo={goTo} />
    )
}

export default UpdateNav