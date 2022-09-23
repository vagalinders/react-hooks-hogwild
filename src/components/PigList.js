import React from 'react';
import hogs from '../porkers_data'
import PigTile from './PigTile'




function PigList() {
    
    function renderPigTiles(hogs) {
        console.log(hogs)  
        return hogs.map(hog => (
            
            <PigTile key={hog.name}
            {...hogs} />
        ))
           
        
    }
    
    
    return (
        <section>
            <ul className="cards">
                {renderPigTiles(hogs)}
           </ul>
        </section>
    )
}

export default PigList;