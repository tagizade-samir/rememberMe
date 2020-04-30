import React from 'react'
import AddItem from './AddItem'
import { Constans } from '../../App/constans/constans'

const AddItemNav = ({navigation}) => {
    const goToList = () => {
        navigation.navigate(Constans.TODO_SCREEN)
    }

    return(
        <AddItem goTo={goToList} />
    )
}

export default AddItemNav