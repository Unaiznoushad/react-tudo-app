import React, { useState } from "react";
import { useForm } from "./useForm";

// function Hook(){
    // const Hook=()=>{
    // const[name,setName]=useState("debug media")
    // const[name,setName]=useState("")
    // const[email,setEmail]=useState("")
    // function reset(){
    //     setName('')
    
// useform
const Hook=()=>{
        const [value,handleChange]=useForm({
            name:'',email:''
        }
        )
        console.log(value.name)

    return(
        <div>
            {/* <h1>welcome {name}</h1> */}
        {/* <button onClick={reset}>reset</button> */}
        {/* <button onClick={()=>setName('')}>reset</button> */}
        {/* <input type="text" name="name" value={name} onChange={(Event)=>setName(Event.target.value)} />
        <input type="text" name="email" value={email}onChange={(Event)=>setEmail(Event.target.value)} /> */}
        {/* useform */}
        <input type="text" name="name" value={value.name} onChange={handleChange} />
        <input type="text" name="email" value={value.email} onChange={handleChange} />

        </div>

    )
}
export default Hook