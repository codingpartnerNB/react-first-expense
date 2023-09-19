import React from "react";
import './ExpenseForm.css';

const ExpenseForm = () =>{
    const titleExpenseHandler = (event)=>{
        console.log(event.target.value);
    }
    return(
        <div className="form">
            <form className="new-expense">
                <div className="expense-control">
                    <label>Expense Title</label>
                    <input type="text" onChange={titleExpenseHandler} />
                </div>
                <div className="expense-control">
                    <label>Expense Amount</label>
                    <input type="number" className="amount-expense" />
                </div>
                <div className="expense-control">
                    <label>Date</label>
                    <input type="date" />
                </div>
                <div className="exp-btn">
                    <button type="submit" className="expense-btn">Add Expense</button>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;