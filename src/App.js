import React, {useState} from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/ExpenseForm/NewExpense';

const App = () => {
  // const expenses = [{
  //   title:"Food",
  //   amount:10,
  //   date:new Date()
  // },{
  //   title:"Petrol",
  //   amount:100,
  //   date:new Date()
  // },{
  //   title:"Movies",
  //   amount:200,
  //   date:new Date()
  // }];

  const [expenses, setExpenses] = useState([]);
  const LocationOfExpenditure = "Delhi";

  const addExpenseHandler = (expense)=>{
    setExpenses([{...expense}]);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {
        expenses.map((item)=>{
        return <ExpenseItem title={item.title} amount={item.amount} date={item.date} locationForExpense={LocationOfExpenditure}></ExpenseItem>
        })
      }
    </div>
  );
}

export default App;
