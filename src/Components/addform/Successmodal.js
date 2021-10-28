import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SuccessModal = ({ modalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#71ccca",
      borderRadius: "12px",
    },
  };
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <ModalInner>
        <h2>
          <strong>
            <label>😀Added Successfully</label>
          </strong>
        </h2>
        <AddedImage
          src={require("../../Assests/Done.gif").default}
          alt="😀Successfully Added"
        />
        <Link to="/" style={{ textDecoration: "none" }}>
          <HomeButton>
            <i className="fi fi-rr-home"></i>
            Home
          </HomeButton>
        </Link>
      </ModalInner>
    </Modal>
  );
};
const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AddedImage = styled.img`
  height: 300px;
  @media only screen and (max-width: 1024px) {
    height: 320px;
  }
  @media only screen and (max-width: 512px) {
    height: 240px;
  }
`;
const HomeButton = styled.div`
  border: 1px solid #000;
  padding: 4px 8px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  opacity: 0.9;
  > i {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 6px;
  }
  :hover {
    opacity: 1;
    background-color: #70dac3;
  }
`;
