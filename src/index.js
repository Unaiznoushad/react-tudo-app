import React from "react";
import ReactDOM from 'react-dom'
import listItem from "./list/listItem";

ReactDOM.render(
    <div className="app">
        <div className="app-header">
            <span className="header-title">code malayalam</span>
            <span>home</span>
            <span>usage</span>
            <span>settings</span>
            <span>logout</span>

        </div>
        <div className="app-body">
            <div className="app-list">
                <listItem/>
                <listItem/>
                <listItem/>
                <listItem/>

            </div>
        </div>
        <div className="app-footer">
            copyright code malayalam
        </div>
    
        </div>,
        
)