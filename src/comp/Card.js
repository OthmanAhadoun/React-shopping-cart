import React from 'react'
export default function Card(p) {
  return (
    <div className='card'>
        <img src={p.src} alt={p.id} />
        <h1>{p.title}</h1>
        <p>{p.description}</p>
        <small>{p.price}$</small>
        <button  onClick={()=>p.add(p.obj)} className='addtocart'>Add To Cart</button>
    </div>
  )
}
