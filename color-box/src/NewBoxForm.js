import React, { useState } from 'react'
import {Box} from "./Box.js"


const NewBoxForm = ({makeBox}) => {
    const INITIAL_STATE = []
    const [formData, setFormData] = useState(INITIAL_STATE)
    

const handleChange = (e) => {
        const {name, value} = e.target;
      setFormData(formData => ({
          ...formData,
          [name]: value
        }))
      }

const handleSubmit = (e) => {e.preventDefault();
makeBox(formData.width, formData.height, formData.backgroundColor)
setFormData(INITIAL_STATE)
}      


return (
<form>
<div>
<input id= "width" type= "text" placeholder= "width" name = "width" value= {formData.width} onChange = {handleChange}/> 
</div>
<div>
<input id= "height" type= "text" placeholder= "height" name = "height" value= {formData.height} onChange = {handleChange}/> 
</div>
<div>
<input id= "backgroundColor" type= "text" placeholder= "background color" name = "backgroundColor" value= {formData.backgroundColor} onChange = {handleChange}/> 
</div>
<div>
<button onClick={handleSubmit}>Create Box</button>
</div>
</form>



)





}

export {NewBoxForm}