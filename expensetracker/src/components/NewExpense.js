import React from "react";
 import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) =>{

    const saveExpenseDateHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
        console.log(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}/>

        </div>
    );
}

export default NewExpense;