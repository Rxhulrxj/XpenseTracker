import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <HomeContainer>
            <HomeTopbar>
                Topbar
            </HomeTopbar>
            <HomeContents>
                Expenses
            </HomeContents>
            
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
`
const HomeTopbar = styled.div`
`
const HomeContents = styled.div`
`
