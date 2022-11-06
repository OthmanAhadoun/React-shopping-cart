import React from 'react'

export default function Header(p) {
  return (
    <header>
        <h1><i className="fa-brands fa-react"></i></h1>
        <h2 className='hope'><i onClick={()=>p.open()} className="fa-solid fa-cart-shopping"></i> <span>{p.count.length}</span> </h2>
    </header>
  )
}
