import ExpenseItem from '../ExpenseItem';

const ExpensesList = (props)=>{
    return(
        <div>
            {
                props.expenses.length === 0 && (<h2 style={{textAlign:"center", color:"white"}}>No expenses found</h2>)
            }
            {
                props.expenses.length === 1 && (props.expenses.map((item)=>{
                    return (<div>
                        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} locationForExpense={props.locationForExpense}></ExpenseItem>
                        <h2 style={{textAlign:"center", color:"white"}}>Only single expense here. Please add more...</h2>
                    </div>)
                }))
            }
            {
                props.expenses.length > 1 && (props.expenses.map((item)=>{
                    return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} locationForExpense={props.locationForExpense}></ExpenseItem>
                    }))
            }
        </div>
    );
}

export default ExpensesList;