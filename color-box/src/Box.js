import React, { useState } from 'react'
import "./App.css"
import {NewBoxForm} from "./NewBoxForm.js"



function Box ({width, height, backgroundColor}) {
let initialState=[]
const [box, setBox] = useState(initialState)

const deleteBox = (e) => { e.preventDefault();
setBox()}

const myStyle= {
    backgroundColor : `${backgroundColor}`,
    height: `${height}px`,
    width: `${width}px`
}

if (box)
    return (
        <>
<div style={myStyle}></div> <button class= 'delete' onClick={deleteBox}>X</button> 
</>
)
    }




export {Box}
