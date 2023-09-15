const ExpenseDetails = (props) => {
    return(
        <div>
            <div>{props.title} Rs {props.amount}</div>
            <div>Location of expenditure is {props.locationForExpense}</div>
        </div>
    );
}

export default ExpenseDetails;