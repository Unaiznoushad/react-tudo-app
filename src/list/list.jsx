import React from 'react'
import ListItem from "./listItem"
import Tool from './tools'

// const obj ={
//     title:"Appointment for october",
//     descr:"The patient is rescheduled to october",
//     isActive:true
// }


const arr = [{
  title: "Appointment for october",
  descr: "The patient is rescheduled to october",
  isActive: true
}, {
  title: "Appointment for october",
  descr: "The patient is rescheduled to october",
  isActive: false
}, {
  title: "Appointment for october",
  descr: "The patient is rescheduled to october",
  isActive: true
}]


class List extends React.Component {
  render() {
    return (
      <Tool>
      <div className="app-list">
        {
          arr.map((obj) => {
            return <ListItem key={obj.title} title={obj.title} descr={obj.descr} isActive={obj.isActive} />
          })
        }
      </div>
      </Tool>
      
      )
  }
}
export default List
