import { useEffect, useState } from "react"
import ExpenseItem from "./components/ExpenseItem"
import Form from "./components/Form"
import axios from "axios"

const App = () => {

  const [expenses, setExpense] = useState([])

  useEffect(() => {
    axios.get('https://expensetracker-0lby.onrender.com/get-entries')
    .then(res => {
      console.log(res.data)
      setExpense(res.data)
    }).catch(err => console.log(err))
  },[])




  const deleteExpense = (id) => {
    setExpense(expenses.filter((exp) => exp.id !== id))
  }
  const addExpense = (title, amount) => {
    const nextId = expenses[expenses.length -1].id +1
    setExpense([...expenses, {id: nextId ,title: title, amount: amount}])
  }
  let income = 0
  let expen = 0
  expenses.forEach((exp) => {
    if(exp.amount > 0){
      income += exp.amount
    }else {
      expen += exp.amount
    }
  })
  let bal = income + expen
  
  return (
    <>
    <div className="container">
    <h3>Expense Tracker</h3>
    <div className="balance">Balance : <span id="income-color">{bal}</span></div>
    <div className="income-expense-container">
      <div className="income">
        <span className="title">Income</span>
        <span id="income-color">{income}</span>
      </div>
      <div className="block"/>
      <div className="exp">
        <span className="title">Expense</span>
        <span id="expen-color">{expen}</span>
      </div>
    </div>
    <Form addExpense = {addExpense}/>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} id={expense.id} deleteExpense={deleteExpense} />
      ))}
</div>

    </>
  )
}
export default App