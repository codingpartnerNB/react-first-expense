import './App.css';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const expenses = [{
    title:"Food",
    amount:10,
    date:new Date()
  },{
    title:"Petrol",
    amount:100,
    date:new Date()
  },{
    title:"Movies",
    amount:200,
    date:new Date()
  }];
  const LocationOfExpenditure = "Delhi";
  return (
    <div>
      {
        expenses.map((item)=>{
        return <ExpenseItem title={item.title} amount={item.amount} date={item.date} locationForExpense={LocationOfExpenditure}></ExpenseItem>
        })
      }
    </div>
  );
}

export default App;
