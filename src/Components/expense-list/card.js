import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import moment from "moment";
import { deleteExpense } from "../../Redux/actions/expenses";

const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteExpense(item));
    notifySuccess();
  };
  return (
    <CardContainer style={{ borderRight: `6px solid ${item.category.color}` }}>
      <CardImageContainer>
        <img src={item.category.icon.default} alt={item.category.title} />
      </CardImageContainer>
      <CardInfo>
        <label className="card-title">{item.title}</label>
        <label className="card-time">{time}</label>
      </CardInfo>
      <CardRight>
        <div>
          <label className="card-amount">₹ {item.amount}</label>
          <i
            className="fi fi-rr-trash"
            title="Delete"
            onClick={handleDelete}
          ></i>
        </div>
      </CardRight>
    </CardContainer>
  );
};

export default Card;
const CardContainer = styled.div`
  border-radius: 20px;
  background: linear-gradient(225deg, #6bbab9, #7fdddc);
  box-shadow: -20px 20px 60px #65b0af, 20px -20px 60px #89eeed;
  padding: 12px;
  margin: 2px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardImageContainer = styled.div`
  > img {
    height: 40px;
  }
  @media only screen and (max-width: 1024px) {
    height: 32px;
  }
`;
const CardInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 12px;
  .card-title {
    font-size: 20px;
  }
  .card-time {
    color: gray;
    font-size: 12px;
  }
  @media only screen and (max-width: 1024px) {
    .card-title {
      font-size: 18px;
    }
    .card-time {
      font-size: 10px;
    }
  }
`;
const CardRight = styled.div`
  > div {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: space-between;
    .card-amount {
      font-size: 20px;
      font-weight: 500;
    }
    > i {
      font-size: 20px;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 1024px) {
    > div.card-amount {
      font-size: 18px;
    }
  }
`;
