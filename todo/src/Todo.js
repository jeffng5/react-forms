import React, {useState} from 'react'
import './App.css';


const Todo = ({task}) => {
let INITIAL_STATE=[]
const [state, setState] = useState(INITIAL_STATE)


const deleteTask = (e) => { e.preventDefault();
setState()
}
console.log(task)

if (state)
return (   
    <>
    <div>{task}<button onClick={deleteTask}>X</button></div>
    </>
     )
}



export default Todo