import { useState } from "react"

const Form = (props) =>{
    const {addExpense} = props

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, amount)
        let errors = {}
        if(title === '' && amount === 0){
            alert("Invalid title and amount, please enter valid title and amount !")
            return
        }
        if(title.length < 3){
            errors.title =  "title should be greater than 3 characters..."
        }
        if(!amount){
           errors.amount = "please enter amount!!!"        
        }
        if(Object.keys(errors).length > 0) {
            setErrors({...errors})
            return
        }

        addExpense(title,amount)
        setTitle('')
        setAmount(0)
        
    }
    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
        setErrors({...errors, title:''})
    }
    const handleAmountChange = (e) => {
        setAmount(parseInt(e.target.value))
        setErrors({...errors, amount:''})
    }
    return(
        <form onSubmit={handleSubmit}>
        <div className="input-container">
            <label htmlFor="title">Title</label>
            <input type="text" id="text" value={title} onChange={handleTitleChange}/>
            {errors.title && <div className="error">{errors.title}</div>}
        </div>
        <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={amount} onChange={handleAmountChange}/>
            {errors.amount && <div className="error">{errors.amount}</div>}
        </div>
        <button type="submit">Add Amount</button>
        </form>
    )
}
export default Form