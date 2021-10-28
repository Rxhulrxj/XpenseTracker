import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopFold = () => {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <TopBarContainer>
      {window.location.pathname === "/" ? (
        <TopBarLeft>
          <SearchBar>
            <i className="fi fi-rr-search" />
            <input
              value={query}
              placeholder="Search here"
              onChange={(e) => handleQuery(e)}
            />
          </SearchBar>
          <Link to="add-expense"
          style={{ textDecoration: 'none' }}>
          <AddButton>
            <i className="fi fi-rr-add" />
            <label>Add</label>
          </AddButton>
          </Link>
        </TopBarLeft>
      ) : (
        <AddTopFold>
          <Link to="/"  style={{ textDecoration: 'none' }}>
            <AddTopFoldButton>
            <i className="fi fi-rr-undo"/>
            <label>Back</label>
            </AddTopFoldButton>
            </Link>
            <Link to="/"  style={{ textDecoration: 'none' }}>
            <AddTopFoldButton>
            <i className="fi fi-rr-cross-circle"/>
            <label>Cancel</label>
            </AddTopFoldButton>
            </Link>
        </AddTopFold>
      )}
    </TopBarContainer>
  );
};

export default TopFold;

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6px 12px;
  padding: 12px 0px;
  align-items: center;
`;
const TopBarLeft = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  border: 1px solid black;
  border-radius: 12px;
  > i {
    display: flex;
    align-items: center;
    margin-left: 6px;
  }
  > input {
    width: 80%;
    outline: none;
    border: none;
    padding: 8px 0px;
    margin-left: 6px;
  }
`;
const AddButton = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 1px solid black;
  font-size: 20px;
  padding: 0px 8px;
  cursor: pointer;
  transition: transform 0.4s;
  text-decoration: none;
  color: black;
  i {
    display: flex;
    align-items: center;
    margin-right: 4px;
  }
  :hover {
    background-color: #000;
    color: white;
    transform: scale(1.1);
  }
`;
const AddTopFold = styled.div`
display: flex;
justify-content: space-between;
flex: 1;
text-decoration: none;

`
const AddTopFoldButton = styled.div`
display: flex;
align-items: center;
font-size: 18px;
cursor: pointer;
text-decoration: none;
color: black;
>label {
    cursor: pointer;
    display: flex;
    align-items: center;
}
i{
    display: flex;
    align-items: center;
    margin-right: 4px;
}
`