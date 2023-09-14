import './ExpenseItem.css';
function ExpenseItem(props){
    return(
        <div>
            <h1 className="color-blue">Expense Items</h1>
            <div>{props.title} Rs {props.amount}</div>
            <div>Location of expenditure is {props.locationForExpense}</div>
        </div>
    );
}

export default ExpenseItem;