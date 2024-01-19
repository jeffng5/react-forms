import React, {useState} from 'react'
import {Box} from "./Box"
import {NewBoxForm} from "./NewBoxForm"
import {ColorBox} from 'devextreme-react/color-box'


const BoxList = () => {

const INITIAL_STATE =[]    
const [state, setState] = useState(INITIAL_STATE)
const makeBox = (width, height, backgroundColor) => {setState(state => [...state, {width, height, backgroundColor}])}
console.log(state)
return (

<>
      
<NewBoxForm makeBox = {makeBox} />

<p className ='display'> 
{state.map(({width, height, backgroundColor}) => <Box width={width} height={height} backgroundColor={backgroundColor}/>)}

</p>   
</>
    )

}




export {BoxList}