import React from "react";
import Header from "./header";
import Meme from "./Meme";
export default function App(){
    console.log(App)
    return(<div className="app">
        <Header/>
        <Meme/>
        </div>
    )
}