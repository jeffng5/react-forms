import React, { useState } from 'react'
import NewTodoForm from "./NewTodoForm"
import Todo from "./Todo"


function TodoList() {
    const INITIAL_STATE = []
    const [formData, setFormData] = useState(INITIAL_STATE)
    const makeTodo = (task) => {setFormData(formData => [...formData, {task}])}
    console.log(formData)

return (
<>
<div>
<h2> Here are your List of Todos:</h2>
</div>
<h3><NewTodoForm makeTodo={makeTodo}/></h3>


<div>
{formData.map(({task}) => <Todo task={task}/>)} 
</div>


<div> 

</div>


</>
)
}

export default TodoList