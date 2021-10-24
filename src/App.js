import Home from "./Pages/home";
import styled from 'styled-components'

function App() {
  return (
    <AppContainer>
      <HeaderContainer>Heading</HeaderContainer>
      <Home />
      <FooterContainer>Footer</FooterContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
font-family: 'Comfortaa', cursive;
margin: 0;
`
const HeaderContainer = styled.div`
`
const FooterContainer = styled.div`
`
