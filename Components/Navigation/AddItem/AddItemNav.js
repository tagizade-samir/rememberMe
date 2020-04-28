import React from 'react'
import AddItem from './AddItem'

const AddItemNav = ({navigation}) => {
    const goToList = () => {
        navigation.navigate('ToDo')
    }

    return(
        <AddItem goTo={goToList} />
    )
}

export default AddItemNav