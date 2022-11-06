import React, {  useState } from 'react'
import Card from './comp/Card'
import Header from './comp/header'
import Shopping from './comp/Shopping'
import data from "./data"
export default function App() {
  const [card,setCard]=useState([])
  const[bool,setBool]=useState(false)
  const add=(item)=>{
    if(!card.includes(item)){
      card.push(item)
      setCard([...card])
      setBool(false)
    }
  }
  const clicked=()=>{
    setBool(!bool)
  }
  const del=(item)=>{
    var filtred=card.filter(e=>e.id!=item)
    setCard(filtred)
  }
  const clear=()=>{
    setCard([])
  }
  return (
    <div>
        <Header count={card} open={clicked}/>
      {(card.length!=0 && bool==true) && <Shopping clear={clear} close={clicked} del={del} items={card}/>}
        <div className="content">
            {data.map(e=><Card key={e.id}  add={add} id={e.id} obj={e} price={e.price} title={e.title} src={e.src} description={e.description} />)}
        </div>
    </div>
  )
}

