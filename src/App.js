import React, {useState} from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/ExpenseForm/NewExpense';
import ExpenseFilter from './components/ExpenseItemDetails/ExpenseFilter';

const DUMMY_EXPENSES = [{
  id:"e1",
  title:"Food",
  amount:10,
  date:new Date()
},{
  id:"e2",
  title:"Petrol",
  amount:100,
  date:new Date()
},{
  id:"e3",
  title:"Movies",
  amount:200,
  date:new Date()
}];

const App = () => {

  const [filteredYear, setFilteredYear] = useState('2020');
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const LocationOfExpenditure = "Delhi";

  const addExpenseHandler = (expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses]
    });
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
        return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} locationForExpense={LocationOfExpenditure}></ExpenseItem>
        })
      }
    </div>
  );
}

export default App;
