import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = () =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
    }
    return(
        <div className="form">
            <form className="new-expense">
                <div className="expense-control">
                    <label>Expense Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="expense-control">
                    <label>Expense Amount</label>
                    <input type="number" onChange={amountChangeHandler} />
                </div>
                <div className="expense-control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} />
                </div>
                <div className="exp-btn">
                    <button type="submit" className="expense-btn">Add Expense</button>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;