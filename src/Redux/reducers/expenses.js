import {ADD_EXPENSE} from "../action-type/expenses"
const initialState={
    expenseList: [],
};

export const expenseReducer=(state =initialState, action)=>{
    switch(action.type){
        case ADD_EXPENSE:{
            return{
                ...state,
                expenseList:[...state.expenseList,action.data],
            }
        }
        default:
            return state;
    }
};