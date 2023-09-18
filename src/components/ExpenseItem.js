import './ExpenseItem.css';
import ExpenseDate from './ExpenseItemDetails/ExpenseDate';
import ExpenseDetails from './ExpenseItemDetails/ExpenseDetails';
const ExpenseItem = (props) => {
    const deleteHandler = () =>{
        console.log("Button Clicked!!");
    }
    return(
        <div className='container'>
            <h1 className="color-blue">Expense Items</h1>
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={props.amount} locationForExpense={props.locationForExpense} />
            <button id="delBtn" onClick={deleteHandler}>Delete Expense</button>
        </div>
    );
}

export default ExpenseItem;