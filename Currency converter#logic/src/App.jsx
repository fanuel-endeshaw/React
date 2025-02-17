import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './Result'
import Select from './Select'
function App() {
  const [result, setResult] = useState(0)
  const [curr1, setCurr1] = useState("euro")
  const [curr2, setCurr2] = useState("euro")
const [inp,setInp]=useState(0)

useEffect(function(){ curr1=="euro"&&curr2=="pound"?setResult(inp*1.1):   console.log(inp);
curr1==curr2? setResult(inp*1):console.log("joker");
curr1=="euro"&&curr2=="dollar"?setResult(inp*1.12):   console.log(inp);
curr1=="dollar"&&curr2=="euro"?setResult(inp*0.89):   console.log(inp);
curr1=="dollar"&&curr2=="pound"?setResult(inp*0.97):   console.log(inp);
curr1=="pound"&&curr2=="euro"?setResult(inp*1.07):   console.log(inp);
curr1=="pound"&&curr2=="dollar"?setResult(inp*1.3):   console.log(inp);




},[inp,curr1,curr2])
function handleChange1(value) {
  // console.log(value);
  setCurr1(value)
 

}
function handleChange2(value) {
  setCurr2(value)

}

function handleChange3(value) {
  setInp(value)
  // curr1=="euro"&&curr2=="pound"?   console.log(inp):   console.log(inp);
  // handleEvent();

}

// function handleEvent() {
//   // if(curr1=="euro"&&curr2=="pound"){
 
    // setResult(inp*2)
//   //   console.log(inp);
    
//   // }
// }


  return (
    <div className='container'>
<input type="text" className='entry' onChange={function(e){handleChange3(e.target.value)
  
}} />
<div className='optional'>

<Select onchange={handleChange1}></Select>
<p> =&gt; </p>
<Select onchange={handleChange2} ></Select>
</div>
<Result>{result}</Result>

</div>


  )
}

export default App




















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




{/* <select onChange={handleChange1(event.target.value)}>
  <option value="euro">EURO</option>
  <option value="dollar">DOLLAR</option>
  <option value="pound">POUND</option>
</select>
<select onChange={handleChange2(e.target.value)}>
  <option value="euro">EURO</option>
  <option value="dollar">DOLLAR</option>
  <option value="pound">POUND</option>
</select> */}