import React from "react";
class Label extends React.Component{
   render(){
   const props=this.props
   const style=props.isActive? {background:'orange'}:{background:'red'}
   return <span style={style}>label 1</span>

}}
export default Label