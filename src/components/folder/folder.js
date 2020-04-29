import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react'
import './folder.css'

function Folder() {
    const [disable, setDisable] = useState(true)
    return (
        <div className="folder-container">
            <Icon
                name='folder outline'
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

export default Folder;