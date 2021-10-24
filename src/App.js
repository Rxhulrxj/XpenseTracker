import Home from "./Pages/home";
import styled from 'styled-components'
import HeaderSide from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddExpense from "./Pages/Addexpense";

function App() {
  return (
      <AppContainer>
        <Router>
      <HeaderContainer>
        <HeaderSide />
      </HeaderContainer>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/"  component={AddExpense}/>
      </Switch>
      <FooterContainer>Footer</FooterContainer>
      </Router>
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
