import styles from './Todo.module.css'
import { useEffect, useState } from 'react'
import React from 'react'
import { MdCheck,MdDeleteForever } from "react-icons/md";

function Todo() {
  const [inputValue ,setInputValue] = useState("")
  const [task ,setTask]= useState([])
  const [dateTime , setDateTime] = useState("")
  const handleFormSubmit=(e)=>{
e.preventDefault()
if(!inputValue)return
if(task.includes(inputValue)){
  setInputValue("")
  return;
} 
setTask((prev)=> [...prev , inputValue])
setInputValue("")
 }
 const handleInputChange=(value)=>{
  setInputValue(value)
 }
//todo date and time

useEffect(()=>{
  const interval = setInterval(()=>{
    const now = new Date();
    const formatedDate = now.toLocaleDateString()
   const formateTime = now.toLocaleTimeString()
   setDateTime(`${formatedDate} - ${formateTime}`)
  },1000)
  //cleanup function
  return ()=> clearInterval(interval)
},[])
// Delete button
const handleTodoDelete =(value)=>{
const updated = task.filter((current)=>{
  return current !== value
  })
setTask(updated)
setInputValue("")
}
//clear button
const handleClearTodo=()=>{
  setTask([])
  setInputValue("")
}
  return (
     <>
     
<div className={styles.whole}>
 <div className={styles.todocontainer}>
    <header>
  <h1>🆃🅾🅳🅾 🅻🅸🆂🆃</h1>
  <div className={styles.datetime}>
    <h3>{dateTime}</h3>
  </div>
</header>

<section className={styles.form}>
<form onSubmit={handleFormSubmit}>
<div>
  <input type="text" className={styles.todoinput} autoComplete='off' value={inputValue} onChange={(e)=>handleInputChange(e.target.value)}/>
<button type="submit" className={styles.todobtn}>Add Task</button>
</div>

</form>
</section>
<section className={styles.topmargine}>
<ul>
  {task.map((curtask,index)=>{
return(
  <>
   <li key={index}className={styles.unOrdList}> <span>{curtask}</span></li>
   <div className={styles.box}>

  <button className={styles.checkbtn} ><MdCheck /></button>
  <button className={styles.deletebtn} onClick={()=>{handleTodoDelete(curtask)}}><MdDeleteForever /></button>
   </div>
</>
)
  })}
</ul>
</section>
<div>
<button className={styles.clear} onClick={handleClearTodo}>Clear All</button>
</div>
</div>
</div>
  
    
 
    </>
  )
}

export default Todo