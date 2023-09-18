import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseItemDetails/ExpenseDate';
import ExpenseDetails from './ExpenseItemDetails/ExpenseDetails';
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const [expense, setExpense] = useState(props.amount);
    // const deleteHandler = () =>{}
    const titleHandler = () =>{
        setTitle("Updated!!")
        console.log(title);
    }
    const expenseHandler = () =>{
        setExpense(100);
        console.log(expense);
    }
    return(
        <div className='container'>
            <h1 className="color-blue">Expense Items</h1>
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={title} amount={expense} locationForExpense={props.locationForExpense} />
            {/* <button className="btn" onClick={deleteHandler}>Delete Expense</button> */}
            <button className="btn" onClick={titleHandler}>Update Title</button>
            <button className="btn" onClick={expenseHandler}>Update Expense</button>
        </div>
    );
}

export default ExpenseItem;