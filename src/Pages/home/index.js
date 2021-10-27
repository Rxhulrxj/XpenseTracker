import React from 'react'
import styled from 'styled-components'
import ExpenseList from '../../Components/expense-list'
import TopFold from '../../Components/topBar'

function Home() {
    return (
        <HomeContainer>
            <TopFold />
            <HomeContents>
                <ExpenseList />
            </HomeContents>    
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
width: 50%;
margin: auto;
@media only screen and (max-width: 1024px) {
    width: 90%;
  }
  @media only screen and (max-width: 512px) {
    width: 100%;
  }
`
const HomeContents = styled.div`
`
