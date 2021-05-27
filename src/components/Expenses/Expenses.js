import { useState } from 'react'

import ExpensesList from './ExpensesList'
import './Expenses.css'
import Card from '../Card/Card'
import ExpensesFilter from './ExpensesFilter.js'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;