import React from 'react'
import TopFold from '../../Components/topBar'
import Styled from 'styled-components'
import AddForm from '../../Components/addform'

const AddExpense = () => {
    return (
        <Addexpense>
            <TopFold />
            <AddForm />
        </Addexpense>
    )
}

export default AddExpense
const Addexpense=Styled.div`
width: 50%;
margin:auto;
@media only screen and (max-width:1024px){
    width: 90%;
}
@media only screen and (max-width: 512px){
    width: 100%;
}
`
