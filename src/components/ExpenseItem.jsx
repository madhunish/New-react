const ExpenseItem = (props) =>{
    const {id, title, amount, deleteExpense} = props

    const handleDelete = () => {
        deleteExpense(id)
    }
    return (
        <div className="expense-item-container">
        <div className={`expense-item ${amount > 0 ? "positive" : "negative"}`}>
            <div className="expense-title">{title}</div>
            <div className="expense-amount">{amount}</div>
        </div>
        <button className="delete" onClick={handleDelete}>clear</button>
        </div>
        
    )
}
export default ExpenseItem