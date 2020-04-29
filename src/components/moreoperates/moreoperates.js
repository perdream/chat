import React, { useState } from 'react';
import { Icon, Popup, Card, Feed, Item,List } from 'semantic-ui-react'
import './moreoperates.css'
const {ipcRenderer} = window.require('electron')

function Operates() {
    const [disable, setDisable] = useState(true)
    const style = {
        borderRadius: 0,
        opacity: 0.7,
    }

    function feedBack(e){
        //ipcRender send message open Feedback window
        ipcRenderer.send('open-feedback-window')
    }

    function restore(){
        ipcRenderer.send('open-restore-window')
    }
    return (
        <Popup
            trigger={
                <div className="operates-container">
                    <Icon
                        name='th large'
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
            }
            style={style}
            basic
            size="small"
            position='right center' 
            inverted
            flowing hoverable
        >
            <Popup.Content>
                <Card
                    fluid
                    className="card-style"
                >
                    <Card.Content>
                        <List divided relaxed> 
                            <List.Item>
                                <List.Content> 
                                    <List.Header className="card-header" onClick={(e)=>{
                                        feedBack(e)
                                    }}>Feedback</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header className="card-header" onClick={(e)=>{
                                        restore()
                                    }}>Backup and restore</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header className="card-header">Set up</List.Header>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Card.Content>
                </Card>
            </Popup.Content>
        </Popup>
    )
}

export default Operates;