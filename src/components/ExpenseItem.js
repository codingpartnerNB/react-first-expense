import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props){
    return(
        <div className='container'>
            <h1 className="color-blue">Expense Items</h1>
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={props.amount} locationForExpense={props.locationForExpense} />
        </div>
    );
}

export default ExpenseItem;