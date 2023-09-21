import ExpenseForm from './ExpenseForm';

const NewExpense = (props)=>{
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    return(
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    )
}

export default NewExpense;
