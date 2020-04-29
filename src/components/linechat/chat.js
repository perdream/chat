import React,{useState}from 'react';
import { Icon } from 'semantic-ui-react'
import './chat.css'

function Chat(props) {
    const [disable, setDisable] = useState(true)
    const {switchPage} = props
    return (
        <div className="chat-container">
            <Icon
                name='comment outline'
                size="large"
                inverted 
                color="grey"
                disabled={disable}
                onMouseEnter={() => {
                    setDisable(false)
                }}
                onMouseLeave={() => {
                    setDisable(true)
                }}
                onClick={()=>{
                    switchPage('chat')
                }}
            />
        </div>
    )
}

export default Chat;