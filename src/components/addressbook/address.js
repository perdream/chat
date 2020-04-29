import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react'
import './address.css'

function Adress(props) {
    const [disable, setDisable] = useState(true)
    const {switchPage} = props
    return (
        <div className="address-container">
            <Icon
                name='address book outline'
                size="large"
                inverted color="grey"
                disabled={disable}
                onMouseEnter={() => {
                    setDisable(false)
                }}
                onMouseLeave={() => {
                    setDisable(true)
                }}
                onClick={()=>{
                    switchPage('address')
                }}
            />
        </div>
    )
}

export default Adress;