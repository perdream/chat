import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react'
import './news.css'

function News() {
    const [disable, setDisable] = useState(true)
    return (
        <div className="news-container">
            <Icon
                name='sun outline'
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

export default News;