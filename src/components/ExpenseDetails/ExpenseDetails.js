import './ExpenseDetails.css';

const ExpenseDetails = (props) => {
    return(
        <div>
            <div className='expense-data'>{props.title} <span className='amount'>Rs {props.amount}</span></div>
            <div className='expense-location'>Location of expenditure is {props.locationForExpense}</div>
        </div>
    );
}

export default ExpenseDetails;