import React, {useState} from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/ExpenseForm/NewExpense';
import ExpenseFilter from './components/ExpenseItemDetails/ExpenseFilter';

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


  const [filteredYear, setFilteredYear] = useState('2020');
  const [expenses, setExpenses] = useState([]);
  const LocationOfExpenditure = "Delhi";

  const addExpenseHandler = (expense)=>{
    setExpenses([{...expense}]);
  }
  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {
        expenses.map((item)=>{
        return <ExpenseItem title={item.title} amount={item.amount} date={item.date} locationForExpense={LocationOfExpenditure}></ExpenseItem>
        })
      }
    </div>
  );
}

export default App;
