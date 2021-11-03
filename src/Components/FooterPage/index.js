import React from "react";
import styled from "styled-components";

const FooterPage = () => {
  return (
    <Footer>
      <label>
        Made with 🔥React By <span>Rahul Raj N</span>
      </label>
    </Footer>
  );
};

export default FooterPage;
const Footer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  margin-left: 50px;
  padding-bottom: 6px;
  > label > span {
    margin-left: 5px;
    color: red;
  }
`;
