import React, {useState} from 'react';
import NewExpense from './components/NewExpense';
import Expenses from "./components/Expenses";

let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'School Fee',
    amount: 250,
    date: new Date(2021, 5, 12)
  },
  {
    id: 'e1',
    title: 'House Rent',
    amount: 300,
    date: new Date(2021, 7, 22)
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 230,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 540,
    date: new Date(2021, 5, 5)
  },
  

];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);

  };

  return (
    <div>
      
      <NewExpense onAddExpense ={addExpenseHandler}/>
      <Expenses item ={expenses}/>

    </div>
  );
}

export default App;