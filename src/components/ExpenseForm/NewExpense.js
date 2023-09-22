import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props)=>{
    const [isShow, setIsShow] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            id:Math.random().toString(),
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData);
        setIsShow(false);
    }
    const startShowHandler = ()=>{
        setIsShow(true);
    }
    const stopShowHandler = ()=>{
        setIsShow(false);
    }
    return(
        <div>
            {
                !isShow && (<div className='btn-control'>
                    <button onClick={startShowHandler} className='btn'>Add New Expenses</button>
                </div>)
            }
            {
                isShow && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopShowHandler} />)
            }
        </div>
    )
}

export default NewExpense;
