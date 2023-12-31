import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const date = props.date.toLocaleString('en-US',{day:'2-digit'});
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const year = props.date.getFullYear();
    return(
        <div className='day'>
            <div>{month}</div>
            <div>{date}</div>
            <div>{year}</div>
        </div>
    );
}

export default ExpenseDate;