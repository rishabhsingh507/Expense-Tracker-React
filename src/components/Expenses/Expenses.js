import { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../Card/Card'
import ExpensesFilter from './ExpensesFilter.js'

const Expenses = (props) => {
    const [fileteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={fileteredYear} onChangeFilter={filterChangeHandler} />
                {props.items.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    )
}

export default Expenses;