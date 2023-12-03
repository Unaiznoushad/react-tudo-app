
import React from "react"
import { Navbar } from "./navbar"
import { Hero } from "./hero"
import { Card } from "./card"
import data from "./data"
export default function App(){
    const arr=data.map((item)=>{
        return(<Card key={item.id}
            // img={item.coverImg}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // location={item.location}
            // title={item.title}
            // price={item.price}
            // openSpots={item.openSpots}
            // item={item}
            {...item}
            />)
        })
    return(
       <div>
        <Navbar/>
        <Hero/>
       <section className="cards-list">{arr}</section>
       </div>
    )
}