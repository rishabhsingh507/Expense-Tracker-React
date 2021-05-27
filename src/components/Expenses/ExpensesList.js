import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    let expensesContent = <p>No Content found</p>

    if (props.items.length === 0) {
        return <h2 className='expenses-list__feedback'>Found no expenses.</h2>
    }

    return (
        <ul className='expenses'>
            {
                props.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            }
        </ul>
    )
}

export default ExpensesList;