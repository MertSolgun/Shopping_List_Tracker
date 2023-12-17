import './App.css';
import Budget from './components/Budget';
import ShowExpenses from './components/ShowExpenses';
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

function App() {
  //data
  const [expenses,setExpenses] = useState([])

  //inputvalue
  const [inputval, SetInputVal] = useState("");

  const [amount,setAmount] = useState()


  //adding expenses
  const handleSubmitBtn = () => {
    if (!inputval.trim() || !amount.trim()){
      Swal.fire({
        icon: "error",
        title: "You must enter an expense description and amount.!",
      });
    }
    else if(isNaN(amount)){
      Swal.fire({
        title: "The expense amount must be a number.",
        icon: "warning"
      });
    }
    else{
      const generatedExpenses = {
        id:new Date().getTime(),
        expenses: inputval, 
        expensesAmount: Number(amount)
      };
      setExpenses([...expenses, generatedExpenses]);
      SetInputVal("");
      setAmount("")
      localStorage.setItem("expenses",JSON.stringify([...expenses, generatedExpenses]))
    }
  };



  //delete
  const handleDelete = (id) => {
      const removedData = expenses.filter((item) => (
         item.id !== id
      ))
      setExpenses(removedData)
      localStorage.setItem("expenses",JSON.stringify(removedData))
  }

  // edit
  const handleEdit = (id, expenVal) => {
    setExpenses((prevExpenses) => {
      const upDateExpenses = prevExpenses.map((item) => (
        item.id === id ? {...item,expenses:expenVal} : item
      ))
      localStorage.setItem('expenses',JSON.stringify(upDateExpenses))
      return upDateExpenses
    })
  };

  //totalamount
  const totalAmount = () => {
    const totally = expenses.reduce((total,expen) => total + expen.expensesAmount,0)
    return totally
  };
  

   useEffect(() => {
    const getLocal = localStorage.getItem("expenses")
    if(getLocal){
      setExpenses(JSON.parse(getLocal))
    }
  },[])



  return (
    <div className='budget'>
    <Budget handleSubmitBtn={handleSubmitBtn} SetInputVal={SetInputVal} inputval={inputval} setAmount={setAmount} amount={amount}/>
    {expenses.map((everyexpenses,index)  => (
    <ShowExpenses key={index} everyexpenses={everyexpenses}  handleDelete={handleDelete} handleEdit={handleEdit} />
    ))}
  {totalAmount() > 0 && 
    <div className='totalAmount'>
  <h1 className='text-center fs-3 text-danger'>All Expenses: ${totalAmount()}</h1>
  </div>
  }
  </div>
  );
}

export default App;


