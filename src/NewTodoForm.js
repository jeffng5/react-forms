import React, { useState } from 'react'



const NewTodoForm = ({makeTodo}) =>{
const INITIAL_STATE = ""
const [formData, setFormData] = useState(INITIAL_STATE)
// const makeTodo = task => {setFormData({...formData, task});}
console.log(formData)


const handleChange= (e) => {
  const { name, value } = e.target;
  setFormData(data => ({ ...data, [name]: value}))
}
const handleSubmit= (e) => { e.preventDefault();
makeTodo(formData.task)
setFormData(INITIAL_STATE)
}

return (
<>
<form>
<input id = "task" type="text" placeholder="add task" name='task' value={formData} onChange={handleChange}/>
</form> 
<button onClick={handleSubmit} > Add Task </button>


</>
)

}

export default NewTodoForm