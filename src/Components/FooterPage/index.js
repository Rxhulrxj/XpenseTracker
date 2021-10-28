import React from 'react'
import styled from 'styled-components'

const FooterPage = () => {
    return (
        <Footer>
            <label>Made with 🔥React</label>
        </Footer>
    )
}

export default FooterPage
const Footer= styled.div`
width: 100%;
position: fixed;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
padding-bottom: 6px;
`