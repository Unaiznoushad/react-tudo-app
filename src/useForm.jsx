import { useState } from "react";

export const useForm=(initialValue)=>{
    const [value,setValue]=useState(initialValue)
    return[
        value,(Event)=>{setValue(...value,{[Event.target.name]:Event.target.value})
     } ]
}