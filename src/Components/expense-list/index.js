import React from 'react'
import Card from './card'

const ExpenseList = () => {
    const list =[{
        title: 'Made a purchase',
        logo: 'asdsad',
        createdAt:Date.now(),
        amount: 100,
    },
    {
        title: 'Made a purchase',
        logo: 'asdsad',
        createdAt:Date.now(),
        amount: 100,
    },
];
    return  <div>
            {list.length ?
                list.map((item) => <Card item={item}/>) : null}</div>;
}

export default ExpenseList
