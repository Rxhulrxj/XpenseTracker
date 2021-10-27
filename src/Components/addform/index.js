import React, { useState } from "react";
import styled from "styled-components";
import { Categories } from "../../Constants/addexpense";
import {useDispatch} from "react-redux"

const AddForm = () => {
  const categories = Categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
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
  const handleSubmit=()=> {
      if(title==="" || amount==="" ||!category){
          alert("Please enter the details");
          return;
      }
      const data={
          title,
          amount,
          category,
          createdAt:new Date(),
      }
  }
  return (
    <AddFormContainer>
      <FormItem>
        <label>title</label>
        <input
          placeholder="Give a Name to your expenditure"
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
            <i class="fi fi-rr-angle-down" onClick={() => setCategoryOpen(!categoryOpen)}></i>
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
              <i class="fi fi-sr-map-marker-plus"></i>
          </div>
      </FormAddButton>
    </AddFormContainer>
  );
};

export default AddForm;
const AddFormContainer = styled.div``;
const FormItem = styled.div``;
const CategoryContainer = styled.div``;
const Category = styled.div``;
const CategoryLabel = styled.div``;
const CategoryItems = styled.div``;
const CatItem = styled.div``;
const FormAddButton = styled.div``;
