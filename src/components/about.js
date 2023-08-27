import axios from "axios"
import { useState } from "react"

function About(){
    const [text,setText]= useState('');
    function addUser(){
        axios.post('http://localhost:3000/user',{name:text})
        .then(()=>{
            console.log('user added successfully')
        })
        .catch(()=>{
            console.log("Error while saving data")
        })
    }
    return (
        <>
            <p>Name</p>
            <input value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={addUser}>Submit</button>
        </>
    )
}
export default About