
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addnumber, clearlist} from "./Redux/Actions/actions.js";

function App() {

  const numbers= useSelector ((state) => state.numbers)
  const dispatch = useDispatch ()
  const [inputValue, setInputValue]= useState()

  const addBtn=()=>{
    if (!isNaN(inputValue) ){
      const NumberAdd= parseFloat(inputValue)
      dispatch(addnumber(NumberAdd))
      setInputValue('')
    }

  }

  const clear=()=>{
    dispatch(clearlist())
  }

  return (
    <>
      <div>
        <input type="number"  value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={addBtn}>Добавить</button>
        <button onClick={clear}>Очистить</button>
      </div>
      <div>
        <ul>
          {numbers.map((number)=>(

              <li>{number}</li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default App
