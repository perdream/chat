import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react'
import './phone.css'

function Phone() {
    const [disable, setDisable] = useState(true)
    return (
        <div className="phone-container">
            <Icon
                name='mobile alternate'
                size="large"
                inverted color="grey"
                disabled={disable}
                onMouseEnter={() => {
                    setDisable(false)
                }}
                onMouseLeave={() => {
                    setDisable(true)
                }}
            />
        </div>
    )
}

export default Phone;