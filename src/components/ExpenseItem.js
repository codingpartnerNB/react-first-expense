import './ExpenseItem.css';
import ExpenseDate from './ExpenseItemDetails/ExpenseDate';
import ExpenseDetails from './ExpenseItemDetails/ExpenseDetails';
const ExpenseItem = (props) => {
    return(
        <div className='container'>
            <h1 className="color-blue">Expense Items</h1>
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={props.amount} locationForExpense={props.locationForExpense} />
        </div>
    );
}

export default ExpenseItem;