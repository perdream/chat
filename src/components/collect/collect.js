import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react'
import './collect.css'

function Collect() {
    const [disable,setDisable] = useState(true)
    return (
        <div className="collect-container">
            <Icon 
            name='picture' 
            size="large" 
            inverted color="grey" 
            disabled={disable}
            onMouseEnter={()=>{
                setDisable(false)
            }}
            onMouseLeave = {()=>{
                setDisable(true)
            }}
            /> 
        </div>
    )
}

export default Collect;