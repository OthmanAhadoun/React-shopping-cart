import React from 'react'

function Shopping(p) {
    var total=0
  return (
    <div className='side'>
        <i onClick={()=>p.close()} className="fa-solid fa-xmark"></i>
        {p.items.map(e=>{
            return (<div className='shoppingrow' key={e.id}>
                        <img src={e.src} />
                        <div className='textdisc'>
                            <p>{e.description}</p>
                            <h1>{e.title}</h1>
                            <h3>{e.price}$</h3>
                            <i onClick={()=>p.del(e.id)} className="fa-solid fa-circle-xmark del"></i>
                        </div>
                    </div>)
        })}
        {p.items.length!=0 && <><button className='pay'>Cost:{p.items.forEach(e=>total+=+e.price)} {total}$</button><button onClick={()=>p.clear()} className='clear'>clear</button></>}
        
    </div>
    )
}

export default Shopping