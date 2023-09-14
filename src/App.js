import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [{
    title:"Food",
    amount:10
  },{
    title:"Petrol",
    amount:100
  },{
    title:"Movies",
    amount:200
  }];
  const LocationOfExpenditure = "Delhi";
  return (
    <div>
      {
        expenses.map((item)=>{
        return <ExpenseItem title={item.title} amount={item.amount} locationForExpense={LocationOfExpenditure}></ExpenseItem>
        })
      }
    </div>
  );
}

export default App;
