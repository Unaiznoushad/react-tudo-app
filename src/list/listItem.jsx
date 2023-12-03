import React from "react";
import Label from "./label";
function ListItem(props){
    return(
        <div className="list-item">
        <div className="title"><h4>{props.title}</h4></div>
        <div className="desc">{props.descr}</div>
        <div className="labels">
            <Label isActive={props.isActive} />

            </div>
        </div>
    )
}
export default ListItem