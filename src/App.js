import React, {useState} from 'react';
import './App.css';
import ExpensesList from './components/ExpenseDetails/ExpensesList';
import NewExpense from './components/ExpenseForm/NewExpense';
import ExpenseFilter from './components/ExpenseDetails/ExpenseFilter';
import ExpensesChart from './components/ExpenseDetails/ExpensesChart';

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

  const filteredExpenses = expenses.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} locationForExpense={LocationOfExpenditure} />
    </div>
  );
}

export default App;
