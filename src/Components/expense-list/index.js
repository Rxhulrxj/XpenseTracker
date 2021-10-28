import React from "react";
import Card from "./card";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";

const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  const filteredList = list.filter((item) => item.title.includes(query));
  const notifySuccess = () => toast.success("Deleted Successfully");
  return (
    <Expenselist>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
      {filteredList.length ? (
        filteredList.map((item) => (
          <Card item={item} notifySuccess={notifySuccess} />
        ))
      ) : (
        <EmptyList>
          <img src={require("../../Assests/Empty.gif").default} alt="Empty" />
          <label>☹️Uh oh! Your Expense list is Empty</label>
        </EmptyList>
      )}
    </Expenselist>
  );
};

export default ExpenseList;
const Expenselist = styled.div`
  margin: 6px 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 40px;
`;
const EmptyList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > img {
    height: 360px;
  }
  @media only screen and (max-width: 1024px) {
    > img {
      height: 320px;
    }
  }
  @media only screen and (max-width: 512px) {
    > img {
      height: 240px;
    }
  }
`;
