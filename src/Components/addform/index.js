import React, { useState } from "react";
import styled from "styled-components";
import { Categories } from "../../Constants/addexpense";
import { useDispatch } from "react-redux";
import { addExpense } from "../../Redux/actions/expenses";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { SuccessModal } from "./Successmodal";

const AddForm = () => {
  const categories = Categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };
  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };
  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("⚠️Please Enter The data!");
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setModalOpen(true);
  };
  return (
    <AddFormContainer>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      <FormItem>
        <label>title</label>
        <input
          placeholder="Mention the expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </FormItem>
      <FormItem>
        <label>Amount ₹</label>
        <input
          value={amount}
          onChange={(e) => handleAmount(e)}
          placeholder="Enter the amount"
          className="amountinput"
        />
      </FormItem>
      <CategoryContainer>
        <Category>
          <CategoryLabel>
            <label>{category ? category.title : "Category"}</label>
            <i
              className="fi fi-rr-angle-down"
              onClick={() => setCategoryOpen(!categoryOpen)}
            ></i>
          </CategoryLabel>
          {categoryOpen && (
            <CategoryItems>
              {categories.map((category) => (
                <CatItem
                  style={{
                    borderRight: `5px solid ${category.color}`,
                  }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label>{category.title}</label>
                  <img src={category.icon.default} alt={category.title} />
                </CatItem>
              ))}
            </CategoryItems>
          )}
        </Category>
      </CategoryContainer>
      <FormAddButton>
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i className="fi fi-rr-paper-plane"></i>
        </div>
      </FormAddButton>
    </AddFormContainer>
  );
};

export default AddForm;
const AddFormContainer = styled.div`
border-radius: 50px;
background: linear-gradient(145deg, #66b8b6, #79dad8);
box-shadow:  20px 20px 60px #60adac,
             -20px -20px 60px #82ebe8;
             
margin:6px 12px;
padding:24px;
display: flex;
flex-direction: column;
flex: 1;
min-height: 68vh;
`;
const FormItem = styled.div`
margin: 12px 0px;
width: 70%;
padding: 4px;
border-radius: 6px;
background-color: #fff; 
>label{
  background-color: #8F9191;
  padding: 2px 12px;
  border-radius: 0px 4px 4px 0px;
}
>input{
  font-size:16px;
  border: none;
  outline: none;
  width: 70%;
  margin-left: 8px;
}
@media only screen and (max-width:1024px) {
  width: 100%;
  >input{
    width: 70%;
  }
  .amountinput{
    width: 50% !important;
  }
}
`;
const CategoryContainer = styled.div`
display: flex;
flex-direction: column;
flex:1;
`;
const Category = styled.div`
position: relative;
width: 40%;
@media only screen and (max-width:1024px){
  width: 80%;
}
`;
const CategoryLabel = styled.div`
display: flex;
justify-content: space-between;
background-color: #fff;
border-radius: 6px;
align-items: center;
margin: 12px 0px;
padding: 4px;
> i{
  display: flex;
  align-items: center;
}
`;
const CategoryItems = styled.div`
display: flex;
position: absolute;
width: 100%;
flex-direction: column;
background-color: #fff;
border-radius: 6px;
`;
const CatItem = styled.div`
width: 98%;
display: flex;
justify-content:space-between;
padding: 8px 0px;
cursor: pointer;
margin-left: 6px;
>img{
  height: 32px;
  margin-right: 20px;
}
`;
const FormAddButton = styled.div`
display: flex;
justify-content: flex-end;
>div{
  display: flex;
  border: 1px solid #000;
  padding:2px 8px;
  border-radius:6px;
}
>div>i{
  display: flex;
  align-items: center;
  margin-left: 6px;
  transition: transform .4s;
  opacity: 0.8;
}
div:hover {
  transform: scale(1.1);
  opacity: 1;
}
`;
