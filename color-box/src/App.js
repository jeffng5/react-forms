import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.light.css';
import React, { useState } from 'react'
import {BoxList} from "./BoxList.js"
import './App.css';
import {Box} from "./Box.js"
import {NewBoxForm} from "./NewBoxForm.js"

function App() {
  const INITIAL_STATE=[]

  const [formData, setFormData] = useState(INITIAL_STATE)
  const makeBox = (width, height, backgroundColor) => {setFormData(formData => [...formData, {width, height, backgroundColor }])}

return (
    <div className="App">

     <BoxList />
    </div>
  );
}

export default App;
