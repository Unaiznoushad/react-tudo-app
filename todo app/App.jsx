import React from "react";
export default function App(){
    const [toDo,setToDo]=React.useState()
    function toggle(){

    }
    return(
        <div>
            <header>
                TO-DO APPLICATION
            </header>
            <input type="text" placeholder="Enter a list" />
            <button onClick={toggle}>+ADD</button>
        </div>
    )
}