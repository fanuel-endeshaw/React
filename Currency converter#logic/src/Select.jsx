import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Select(props) {
  

  return (
    
<select onChange={function(event){props.onchange(event.target.value)
}}>
  <option value="euro">EURO</option>
  <option value="dollar">DOLLAR</option>
  <option value="pound">POUND</option>
</select>

  )
}

export default Select




















  // useEffect(function(){setCount(C=>C+1)})
// useEffect(function(){ },[])


// function handle(){
// async function wow() {
// const res=await axios.get("http://localhost:8080/jobPost/1")
// // const data=await res.json()
// console.log(res.data);
// setCount(1)
  
// }
// wow()
// }