import React from 'react'
import hogs from '../porkers_data'




function PigTile() {
    console.log(hogs)
    
    return (
        <li className="card">
            <p>{hogs.name}</p>
            
            <img src={hogs.image} alt={hogs.name} />
        </li>
    )
}

export default PigTile