import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    let totalSalary=0;
    for (let i = 0; i < cart.length; i++) {
        const people = cart[i];
        totalSalary=totalSalary+people.Salary;}
    return (
        <div>
            <h4> Number:{cart.length}</h4>
            <h4>Total Salary:{totalSalary}</h4>
            
        </div>
    );
};

export default Cart;